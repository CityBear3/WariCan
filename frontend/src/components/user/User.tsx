import { UserModel } from "@/domain/user";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { PendingIcon } from "@/components/icon/PendingIcon";
import { CheckIcon } from "@/components/icon/CheckIcon";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
};

const imageProps = {
  borderRadius: "full",
  boxSize: "50px",
};

const imageAdditionalProps = {
  marginRight: "12px",
};

const iconProps = {
  boxSize: "24px",
  height: "24px",
};

const iconBoxProps = {
  ...iconProps,
  bottom: "0",
  right: "0",
};

const textProps = {
  fontSize: "24px",
};

export const User: React.FC<Props> = ({ user, withIcon }) => {
  return (
    <HStack>
      <Box position="relative">
        <Image
          {...imageProps}
          {...(withIcon ? imageAdditionalProps : {})}
          src={user.imageUrl}
        />
        <Box position="absolute" {...iconBoxProps}>
          {withIcon === "check" && <CheckIcon {...iconProps} />}
          {withIcon === "pending" && <PendingIcon {...iconProps} />}
        </Box>
      </Box>
      <Text {...textProps}>{user.name}</Text>
    </HStack>
  );
};
