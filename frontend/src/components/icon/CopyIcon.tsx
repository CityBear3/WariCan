import { Icon } from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
import { IconProps } from "./types";

export const CopyIcon: React.FC<IconProps> = (props) => (
  <Icon color="gray.dark" as={FaRegCopy} {...props} />
);
