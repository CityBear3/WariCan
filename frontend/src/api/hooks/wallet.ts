import { depositV1, getV1 } from "@/api/wallet/wallet-Wallet_connectquery";
import { WalletModel } from "@/domain/wallet";
import { useMutation, useQuery } from "@connectrpc/connect-query";
import { MutationHook, QueryHook } from "./common";
import { WalletDepositV1_Response } from "../wallet/wallet_pb";

export const useDeposit: MutationHook<{ wallet: WalletModel }> = (options) => {
  const onSuccess = (res: WalletDepositV1_Response) => {
    const balance = res?.wallet?.balance?.amount;
    if (balance === undefined) {
      options.onError && options.onError(new Error("balance is not defined"));
      return;
    }

    const wallet: WalletModel = {
      balance,
      debt: 2000,
    };
    options.onSuccess && options.onSuccess({ wallet });
  };

  const onError = (err: Error) => {
    options.onError && options.onError(err);
  };

  useMutation(depositV1, { onSuccess, onError });
};

export const useWallet: QueryHook<{ wallet: WalletModel }> = () => {
  const { isLoading, isError, data } = useQuery(getV1);

  if (isLoading || isError) return { isLoading, isError };

  const balance = data?.wallet?.balance?.amount;
  if (balance === undefined) {
    return { isLoading, isError: true };
  }

  const wallet: WalletModel = {
    balance,
    debt: 2000,
  };

  return { isLoading, isError, wallet };
};
