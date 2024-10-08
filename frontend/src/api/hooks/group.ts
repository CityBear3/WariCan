import { useMutation, useQuery } from "@connectrpc/connect-query";
import { MutateOptions, QueryHook } from "./common";
import { createV1, getV1 } from "../group/group-Group_connectquery";
import { GroupModel } from "@/domain/group";
import { GroupCreateV1_Response } from "../group/group_pb";
import { SplitBillingModel } from "@/domain/splitBilling";

export const useCreate = (options?: MutateOptions<{ group: GroupModel }>) => {
  const onSuccess = (res: GroupCreateV1_Response) => {
    const group: GroupModel = {
      id: res.groupId,
      name: res.name,
      description: res.description,
      ownerId: res.ownerId,
      members: res.members.map((member) => {
        return member.userId;
      }),
    };

    options?.onSuccess && options.onSuccess({ group });
  };

  const onError = (err: Error) => {
    options?.onError && options.onError(err);
  };

  return useMutation(createV1, { onSuccess, onError });
};

export const useGroup: QueryHook<
  { id: string },
  {
    group: GroupModel;
    splitBillings: SplitBillingModel[];
  }
> = (input) => {
  const { isLoading, isError, data } = useQuery(getV1, {
    groupId: input?.id ?? "",
  });

  if (isLoading || isError) return { isLoading, isError };

  if (data === undefined) {
    return { isLoading, isError: true };
  }

  const group: GroupModel = {
    id: data.groupId,
    name: data.name,
    description: data.description,
    ownerId: data.ownerId,
    members: data.members.map((member) => {
      return member.userId;
    }),
  };

  // const splitBillings: SplitBillingModel[] = data.splitBillings.map(
  //   (splitBilling) => {
  //     return {
  //       id: splitBilling.id,
  //       name: splitBilling.name,
  //       groupId: splitBilling.groupId,
  //       amount: Number(splitBilling.amount),
  //       advancePayerId: splitBilling.advancePayerId,
  //       type: splitBilling.splitBillingType as "EQUAL_SPLIT",
  //       status: splitBilling.status as "ACTIVE" | "CLOSED",
  //     };
  //   }
  // );

  return { isLoading, isError, group };
};
