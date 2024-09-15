import { UserModel } from "@/domain/user";
import { QueryHook } from "./common";
import { useQuery } from "@connectrpc/connect-query";
import { getV1 } from "../connection/connection-Connection_connectquery";

export const useConnectedUsers: QueryHook<
  never,
  { users: UserModel[] }
> = () => {
  const { isLoading, isError, data } = useQuery(getV1);
  if (isLoading || isError || !data) return { isLoading, isError };

  const users: UserModel[] = data.connectedUsers.map((user) => ({
    id: user.id,
    name: user.lastName + " " + user.firstName,
    imageUrl: user.imageUrl,
    tag: user.tag,
  }));

  return { isLoading: false, isError: false, users };
};
