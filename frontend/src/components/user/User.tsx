import { UserModel } from "@/domain/user";
import { HStack, Text } from "@chakra-ui/react";
import { UserImage } from "./UserImage";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
};

const textProps = {
  fontSize: "24px",
};

export const User: React.FC<Props> = ({ user, withIcon }) => {
  return (
    <HStack>
      <UserImage user={user} withIcon={withIcon} />
      <Text {...textProps}>{user.name}</Text>
    </HStack>
  );
};
