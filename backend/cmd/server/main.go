package main

import (
	"connectrpc.com/connect"
	"context"
	"fmt"
	"github.com/CityBear3/WariCan/handler/wallet_api"
	"github.com/CityBear3/WariCan/internal/app_service/wallet_app_service"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc/interceptor"
	"github.com/CityBear3/WariCan/internal/infrastructure/db"
	"github.com/CityBear3/WariCan/internal/infrastructure/wallet_repository"
	"github.com/CityBear3/WariCan/protobuf/wallet/walletApiconnect"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	host := os.Getenv("HOST")
	if host == "" {
		host = "localhost"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	interceptors := connect.WithInterceptors(
		interceptor.NewAppContextInterceptor(),
		interceptor.NewRequestLogInterceptor(),
	)

	dbConn := db.NewConnection("")

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
		Addr: fmt.Sprintf("%s:%s", host, port),
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
