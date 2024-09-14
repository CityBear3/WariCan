"use client";

import { Logo } from "@/components/text/Logo";
import { UserImageButton } from "@/components/user/UserImageButton";
import { UserModel } from "@/domain/user";
import { Box, Button, HStack } from "@chakra-ui/react";

type Props = {
  user: UserModel;
  onProfileOpen: () => void;
};

const headerProps = {
  bg: "gray.dark",
  top: 0,
  left: 0,
  width: "100%",
  padding: "20px",
};

const logoProps = {
  color: "white",
};

export const Header: React.FC<Props> = ({ user, onProfileOpen }) => (
  <Box position="fixed" {...headerProps}>
    <HStack height="50px" alignContent="center" justifyContent="space-between">
      <Logo {...logoProps} />
      <UserImageButton user={user} onClick={onProfileOpen} />
    </HStack>
  </Box>
);

export const HeaderSpacer: React.FC = () => <Box {...headerProps}></Box>;
