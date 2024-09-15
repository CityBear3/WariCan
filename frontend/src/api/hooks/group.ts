import { WalletModel } from "@/domain/wallet";
import { useMutation, useQuery } from "@connectrpc/connect-query";
import { MutationHook, QueryHook } from "./common";
import { WalletDepositV1_Response } from "../wallet/wallet_pb";
import { getV1 } from "../group/group-Group_connectquery";
import { GroupModel } from "@/domain/group";
import { GroupCreateV1_Response } from "../group/group_pb";

export const useCreate: MutationHook<{ group: GroupModel }> = (options) => {
  const onSuccess = (res: GroupCreateV1_Response) => {
    const group: GroupModel = {
      id: res.groupId,
    };
    options.onSuccess && options.onSuccess({ wallet });
  };

  const onError = (err: Error) => {
    options.onError && options.onError(err);
  };

  useMutation(getV1, { onSuccess, onError });
};

export const useGroup: QueryHook<{ wallet: WalletModel }> = () => {
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
