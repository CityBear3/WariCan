import { Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { IconProps } from "./types";

export const CheckIcon: React.FC<IconProps> = (props) => (
  <Icon color="primary.main" as={FaCheckCircle} {...props} />
);
