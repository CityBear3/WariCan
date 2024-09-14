import { UserModel } from "@/domain/user";
import { HStack } from "@chakra-ui/react";
import { UserImage } from "./UserImage";
import { UserName } from "./UserName";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
};

export const User: React.FC<Props> = ({ user, withIcon }) => {
  return (
    <HStack>
      <UserImage user={user} withIcon={withIcon} />
      <UserName user={user} nameSize="24px" titleSize="24px" />
    </HStack>
  );
};
