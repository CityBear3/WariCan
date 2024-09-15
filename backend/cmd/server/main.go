package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"connectrpc.com/connect"
	firebase "firebase.google.com/go/v4"
	"github.com/CityBear3/WariCan/handler/wallet_api"
	"github.com/CityBear3/WariCan/internal/app_service/wallet_app_service"
	"github.com/CityBear3/WariCan/internal/infrastructure/config"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc/interceptor"
	"github.com/CityBear3/WariCan/internal/infrastructure/db"
	"github.com/CityBear3/WariCan/internal/infrastructure/wallet_repository"
	"github.com/CityBear3/WariCan/protobuf/wallet/walletApiconnect"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	ctx := context.Background()
	serverConfig := config.NewServerConfig()
	dbConfig := config.NewDBConfig()

	dbConn := db.NewConnection(
		fmt.Sprintf("host=%s port=%s user=postgres dbname=%s password=%s sslmode=%s",
			dbConfig.Host, dbConfig.Port, dbConfig.Name, dbConfig.Password, dbConfig.SSLMode),
	)

	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		panic(err)
	}

	authClient, err := app.Auth(ctx)
	if err != nil {
		panic(err)
	}

	interceptors := connect.WithInterceptors(
		interceptor.NewAuthenticationInterceptor(authClient, dbConn, serverConfig.IsDevelopment),
		interceptor.NewAppContextInterceptor(),
		interceptor.NewRequestLogInterceptor(),
	)

	walletApplicationService := wallet_app_service.NewService(
		dbConn,
		wallet_repository.NewUserRepoFunc(),
	)

	walletPath, walletHandler := walletApiconnect.NewWalletHandler(
		wallet_api.NewHandler(walletApplicationService),
		interceptors,
	)

	mux := http.NewServeMux()

	mux.Handle(walletPath, walletHandler)

	svr := http.Server{
		Addr: fmt.Sprintf("%s:%s", serverConfig.Host, serverConfig.Port),
		Handler: cors.AllowAll().Handler(
			h2c.NewHandler(mux, &http2.Server{}),
		),
	}

	log.Println("server start on port")
	if err := svr.ListenAndServe(); err != nil {
		panic(err)
	}

	waitSIGINT()
	defer func() {
		if err := svr.Shutdown(context.Background()); err != nil {
			panic(err)
		}
	}()
}

func waitSIGINT() {
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	signal.Stop(quit)
	close(quit)
}
