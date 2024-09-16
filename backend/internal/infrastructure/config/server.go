package config

import "os"

type ServerConfig struct {
	Host          string
	Port          string
	IsDevelopment bool
}

func NewServerConfig() *ServerConfig {
	host := os.Getenv("HOST")
	if host == "" {
		host = "0.0.0.0"
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	isDevelopment := os.Getenv("IS_DEVELOPMENT") == "true"

	return &ServerConfig{
		Host:          host,
		Port:          port,
		IsDevelopment: isDevelopment,
	}
}
