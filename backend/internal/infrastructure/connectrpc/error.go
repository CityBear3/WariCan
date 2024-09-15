package connectrpc

import "connectrpc.com/connect"

func CreateErrorResponse(err error) *connect.Error {
	return connect.NewError(connect.CodeInternal, err)
}
