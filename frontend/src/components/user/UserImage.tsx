import { Box, Image } from "@chakra-ui/react";
import { PendingIcon } from "@/components/icon/PendingIcon";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { UserModel } from "@/domain/user";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
};

const boxPropsWithIcon = {
  width: "62px",
};

const boxPropsWithoutIcon = {
  width: "50px",
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

export const UserImage: React.FC<Props> = ({ user, withIcon }) => (
  <Box
    position="relative"
    {...(withIcon ? boxPropsWithIcon : boxPropsWithoutIcon)}
  >
    <Image {...imageProps} src={user.imageUrl} />
    <Box position="absolute" {...iconBoxProps}>
      {withIcon === "check" && <CheckIcon {...iconProps} />}
      {withIcon === "pending" && <PendingIcon {...iconProps} />}
    </Box>
  </Box>
);
