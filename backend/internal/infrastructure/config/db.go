package config

import "os"

type DBConfig struct {
	Host     string
	Port     string
	User     string
	Name     string
	Password string
	SSLMode  string
}

func NewDBConfig() *DBConfig {
	dbHost := os.Getenv("DB_HOST")
	if dbHost == "" {
		dbHost = "localhost"
	}

	dbPort := os.Getenv("DB_PORT")
	if dbPort == "" {
		dbPort = "5432"
	}

	dbName := os.Getenv("DB_NAME")
	if dbName == "" {
		dbName = "warican"
	}

	dbUser := os.Getenv("DB_USER")
	if dbUser == "" {
		dbUser = "warican"
	}

	dbPassword := os.Getenv("DB_PASSWORD")
	if dbPassword == "" {
		panic("DB_PASSWORD is required")
	}

	sslMode := os.Getenv("DB_SSLMODE")
	if sslMode != "require" {
		sslMode = "disable"
	}

	return &DBConfig{
		Host:     dbHost,
		Port:     dbPort,
		Name:     dbName,
		User:     dbUser,
		Password: dbPassword,
		SSLMode:  sslMode,
	}
}
