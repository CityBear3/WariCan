"use client";

import { Logo } from "@/components/text/Logo";
import { UserImageButton } from "@/components/user/UserImageButton";
import { UserModel } from "@/domain/user";
import { Box, HStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  user: UserModel;
  onProfileOpen: () => void;
};

const headerProps = {
  bg: "gray.dark",
  boxSizing: "border-box",
  top: 0,
  left: 0,
  width: "100%",
  padding: "20px",
} as const;

const headerSpacerProps = {
  ...headerProps,
  height: "90px",
  bg: "auto",
} as const;

const logoProps = {
  color: "white",
};

export const Header: React.FC<Props> = ({ user, onProfileOpen, ...props }) => {
  const router = useRouter();

  const onHomeClick = () => {
    router.push("/");
  };

  return (
    <Box {...headerProps} {...props}>
      <HStack
        height="50px"
        alignContent="center"
        justifyContent="space-between"
      >
        <Logo {...logoProps} onClick={onHomeClick} />
        <UserImageButton user={user} onClick={onProfileOpen} />
      </HStack>
    </Box>
  );
};

export const HeaderSpacer: React.FC = () => <Box {...headerSpacerProps}></Box>;
