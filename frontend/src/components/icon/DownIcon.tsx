import { Icon } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";
import { IconProps } from "./types";

export const DownIcon: React.FC<IconProps> = (props) => (
  <Icon as={FaCaretDown} {...props} />
);
