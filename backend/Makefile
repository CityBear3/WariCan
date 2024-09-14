DB_URL = "postgres://warican:warican@localhost:15432/warican?sslmode=disable"
BUF_VERSION = v1.41.0
PROTOC_GEN_GO_VERSION = v1.34.2
PROTOC_GEN_CONNECT_GO_VERSION = v1.16.2

.PHONY: install-tools
install-tools:
	go install github.com/bufbuild/buf/cmd/buf@${BUF_VERSION}
	go install google.golang.org/protobuf/cmd/protoc-gen-go@${PROTOC_GEN_GO_VERSION}
	go install connectrpc.com/connect/cmd/protoc-gen-connect-go@${PROTOC_GEN_CONNECT_GO_VERSION}

.PHONY: db-migrate
db-migrate:
	migrate --path schema/db/migrations --database $(DB_URL) -verbose up

.PHONY: db-clean
db-clean:
	migrate --path schema/db/migrations --database $(DB_URL) -verbose down