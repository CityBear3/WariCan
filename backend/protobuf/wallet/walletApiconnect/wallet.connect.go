// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: wallet/wallet.proto

package walletApiconnect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	wallet "github.com/CityBear3/WariCan/protobuf/wallet"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// WalletName is the fully-qualified name of the Wallet service.
	WalletName = "warican.api.wallet.Wallet"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// WalletDepositV1Procedure is the fully-qualified name of the Wallet's DepositV1 RPC.
	WalletDepositV1Procedure = "/warican.api.wallet.Wallet/DepositV1"
	// WalletGetV1Procedure is the fully-qualified name of the Wallet's GetV1 RPC.
	WalletGetV1Procedure = "/warican.api.wallet.Wallet/GetV1"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	walletServiceDescriptor         = wallet.File_wallet_wallet_proto.Services().ByName("Wallet")
	walletDepositV1MethodDescriptor = walletServiceDescriptor.Methods().ByName("DepositV1")
	walletGetV1MethodDescriptor     = walletServiceDescriptor.Methods().ByName("GetV1")
)

// WalletClient is a client for the warican.api.wallet.Wallet service.
type WalletClient interface {
	DepositV1(context.Context, *connect.Request[wallet.WalletDepositV1_Request]) (*connect.Response[wallet.WalletDepositV1_Response], error)
	GetV1(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[wallet.WalletGetV1_Response], error)
}

// NewWalletClient constructs a client for the warican.api.wallet.Wallet service. By default, it
// uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewWalletClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) WalletClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &walletClient{
		depositV1: connect.NewClient[wallet.WalletDepositV1_Request, wallet.WalletDepositV1_Response](
			httpClient,
			baseURL+WalletDepositV1Procedure,
			connect.WithSchema(walletDepositV1MethodDescriptor),
			connect.WithClientOptions(opts...),
		),
		getV1: connect.NewClient[emptypb.Empty, wallet.WalletGetV1_Response](
			httpClient,
			baseURL+WalletGetV1Procedure,
			connect.WithSchema(walletGetV1MethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// walletClient implements WalletClient.
type walletClient struct {
	depositV1 *connect.Client[wallet.WalletDepositV1_Request, wallet.WalletDepositV1_Response]
	getV1     *connect.Client[emptypb.Empty, wallet.WalletGetV1_Response]
}

// DepositV1 calls warican.api.wallet.Wallet.DepositV1.
func (c *walletClient) DepositV1(ctx context.Context, req *connect.Request[wallet.WalletDepositV1_Request]) (*connect.Response[wallet.WalletDepositV1_Response], error) {
	return c.depositV1.CallUnary(ctx, req)
}

// GetV1 calls warican.api.wallet.Wallet.GetV1.
func (c *walletClient) GetV1(ctx context.Context, req *connect.Request[emptypb.Empty]) (*connect.Response[wallet.WalletGetV1_Response], error) {
	return c.getV1.CallUnary(ctx, req)
}

// WalletHandler is an implementation of the warican.api.wallet.Wallet service.
type WalletHandler interface {
	DepositV1(context.Context, *connect.Request[wallet.WalletDepositV1_Request]) (*connect.Response[wallet.WalletDepositV1_Response], error)
	GetV1(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[wallet.WalletGetV1_Response], error)
}

// NewWalletHandler builds an HTTP handler from the service implementation. It returns the path on
// which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewWalletHandler(svc WalletHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	walletDepositV1Handler := connect.NewUnaryHandler(
		WalletDepositV1Procedure,
		svc.DepositV1,
		connect.WithSchema(walletDepositV1MethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	walletGetV1Handler := connect.NewUnaryHandler(
		WalletGetV1Procedure,
		svc.GetV1,
		connect.WithSchema(walletGetV1MethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/warican.api.wallet.Wallet/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case WalletDepositV1Procedure:
			walletDepositV1Handler.ServeHTTP(w, r)
		case WalletGetV1Procedure:
			walletGetV1Handler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedWalletHandler returns CodeUnimplemented from all methods.
type UnimplementedWalletHandler struct{}

func (UnimplementedWalletHandler) DepositV1(context.Context, *connect.Request[wallet.WalletDepositV1_Request]) (*connect.Response[wallet.WalletDepositV1_Response], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("warican.api.wallet.Wallet.DepositV1 is not implemented"))
}

func (UnimplementedWalletHandler) GetV1(context.Context, *connect.Request[emptypb.Empty]) (*connect.Response[wallet.WalletGetV1_Response], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("warican.api.wallet.Wallet.GetV1 is not implemented"))
}
