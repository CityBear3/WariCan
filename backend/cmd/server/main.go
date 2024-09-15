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
	"github.com/CityBear3/WariCan/handler/wallet_api"
	"github.com/CityBear3/WariCan/internal/app_service/wallet_app_service"
	"github.com/CityBear3/WariCan/internal/infrastructure/connectrpc/interceptor"
	"github.com/CityBear3/WariCan/internal/infrastructure/db"
	"github.com/CityBear3/WariCan/internal/infrastructure/wallet_repository"
	"github.com/CityBear3/WariCan/protobuf/wallet/walletApiconnect"
	"github.com/rs/cors"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
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

	dbHost := os.Getenv("DB_HOST")
	if dbHost == "" {
		dbHost = "localhost"
	}

	dbPort := os.Getenv("DB_PORT")
	if dbPort == "" {
		dbPort = "5432"
	}

	dbName := os.Getenv("DB_NAME")
	if dbName != "" {
		dbName = "warican"
	}

	dbPassword := os.Getenv("DB_PASSWORD")
	if dbPassword == "" {
		panic("DB_PASSWORD is required")
	}

	dbConn := db.NewConnection(
		fmt.Sprintf("host=%s port=%s user=postgres dbname=%s password=%s sslmode=disable", dbHost, dbPort, dbName, dbPassword),
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
