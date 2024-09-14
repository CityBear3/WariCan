import { Icon } from "@chakra-ui/react";
import { MdOutlinePending } from "react-icons/md";
import { IconProps } from "./types";

export const PendingIcon: React.FC<IconProps> = (props) => (
  <Icon color="accent" as={MdOutlinePending} {...props} />
);
