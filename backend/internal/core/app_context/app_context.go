package app_context

import (
	"context"
	"errors"
	"time"

	"github.com/CityBear3/WariCan/internal/domain/user"
	"github.com/google/uuid"
)

const AppContextKey = "AppContext"

var ErrAppContextNotFound = errors.New("app context not found")

func GetAppContext(ctx context.Context) (AppContext, error) {
	appContext, ok := ctx.Value(AppContextKey).(AppContext)
	if !ok {
		return AppContext{}, ErrAppContextNotFound
	}
	return appContext, nil
}

type AppContext struct {
	IdempotencyKey uuid.UUID
	CallUUID       uuid.UUID
	UserID         user.ID
	CurrentTime    time.Time
}

func NewAppContext(idempotencyKey uuid.UUID, callUUID uuid.UUID, userID user.ID, currentTime time.Time) AppContext {
	return AppContext{
		IdempotencyKey: idempotencyKey,
		CallUUID:       callUUID,
		UserID:         userID,
		CurrentTime:    currentTime,
	}
}
