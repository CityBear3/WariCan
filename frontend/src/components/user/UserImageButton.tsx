import { Box, Button, Image } from "@chakra-ui/react";
import { PendingIcon } from "@/components/icon/PendingIcon";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { UserModel } from "@/domain/user";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
  onClick: () => void;
};

const boxPropsWithIcon = {
  width: "62px",
};

const boxPropsWithoutIcon = {
  width: "50px",
};

const buttonProps = {
  borderRadius: "full",
  padding: 0,
  height: "50px",
};

const imageProps = {
  borderRadius: "full",
  boxSize: "50px",
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

export const UserImageButton: React.FC<Props> = ({
  user,
  withIcon,
  onClick,
}) => (
  <Box
    position="relative"
    {...(withIcon ? boxPropsWithIcon : boxPropsWithoutIcon)}
  >
    <Button onClick={onClick} {...buttonProps}>
      <Image {...imageProps} src={user.imageUrl} />
    </Button>
    <Box position="absolute" {...iconBoxProps}>
      {withIcon === "check" && <CheckIcon {...iconProps} />}
      {withIcon === "pending" && <PendingIcon {...iconProps} />}
    </Box>
  </Box>
);
