import { UserModel } from "@/domain/user";
import { UserImage } from "./UserImage";
import { HStack, Text } from "@chakra-ui/react";

type Props = {
  users: UserModel[];
};

export const UserList: React.FC<Props> = ({ users }) => (
  <HStack spacing="10px">
    {users.map((user) => (
      <UserImage user={user} key={user.id} size={30} />
    ))}
    <Text>({users.length}人)</Text>
  </HStack>
);
