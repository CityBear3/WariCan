"use client";

import { UserModel } from "@/domain/user";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  HStack,
} from "@chakra-ui/react";
import { Profile } from "../user/Profile";

type Props = {
  user: UserModel;
  isOpen: boolean;
  onClose: () => void;
};

const contentProps = {
  bg: "transparent",
  margin: "auto",
};

export const ProfileModal: React.FC<Props> = ({ user, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent {...contentProps}>
          <ModalBody>
            <HStack justifyContent="center">
              <Profile user={user} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
