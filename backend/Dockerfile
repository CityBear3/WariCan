FROM golang:1.23.1

WORKDIR /go/src/app

COPY . .

RUN go mod tidy

EXPOSE 8080

CMD ["go", "run", "cmd/server/main.go"]