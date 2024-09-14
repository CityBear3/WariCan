package main

import (
	"context"
	"fmt"
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

	//interceptors := connect.WithInterceptors(
	//	interceptor.NewAppContextInterceptor(),
	//	interceptor.NewRequestLogInterceptor(),
	//)

	//walletPath, walletHandler := walletApiconnect.NewWalletHandler()

	mux := http.NewServeMux()

	//mux.Handle(walletPath, walletHandler)

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
