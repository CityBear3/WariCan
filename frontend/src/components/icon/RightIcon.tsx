import { Icon } from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa";
import { IconProps } from "./types";

export const RightIcon: React.FC<IconProps> = (props) => (
  <Icon as={FaCaretRight} {...props} />
);
