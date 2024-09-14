import { Box, Image } from "@chakra-ui/react";
import { PendingIcon } from "@/components/icon/PendingIcon";
import { CheckIcon } from "@/components/icon/CheckIcon";
import { UserModel } from "@/domain/user";

type Props = {
  user: UserModel;
  withIcon?: "check" | "pending";
  size?: number;
};

export const UserImage: React.FC<Props> = ({ user, withIcon, size = 50 }) => {
  const boxPropsWithIcon = {
    width: `${Math.floor(size * 1.25)}px`,
  };

  const boxPropsWithoutIcon = {
    width: `${size}px`,
  };

  const imageProps = {
    borderRadius: "full",
    boxSize: `${size}px`,
  };

  const iconProps = {
    boxSize: `${Math.floor(size / 2)}px`,
    height: `${Math.floor(size / 2)}px`,
  };

  const iconBoxProps = {
    ...iconProps,
    bottom: "0",
    right: "0",
  };

  return (
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
};
