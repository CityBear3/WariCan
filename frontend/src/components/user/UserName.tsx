import { UserModel } from "@/domain/user";
import { HStack, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  user: UserModel;
  nameSize?: string;
  titleSize?: string;
} & ComponentProps<typeof Text>;

export const UserName: React.FC<Props> = ({
  user,
  nameSize,
  titleSize,
  ...props
}) => (
  <HStack alignItems="baseline" spacing="0.2em">
    <Text {...(nameSize ? { fontSize: nameSize } : {})} {...props}>
      {user.name}
    </Text>
    <Text {...(titleSize ? { fontSize: titleSize } : {})} {...props}>
      さん
    </Text>
  </HStack>
);
