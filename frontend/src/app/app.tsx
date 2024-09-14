"use client";

import { ReactNode } from "react";
import { Header } from "./header";
import { ProfileModal } from "@/components/modal/ProfileModal";
import { useDisclosure } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

const user = {
  id: "sample id",
  name: "三島 智昭",
  imageUrl: "/sample_profile.png",
  tag: "#キャンプ\n#プログラミング",
};

export const App: React.FC<Props> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header user={user} onProfileOpen={onOpen} />
      {children}
      <ProfileModal user={user} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
