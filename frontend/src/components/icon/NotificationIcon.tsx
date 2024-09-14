import { Icon } from "@chakra-ui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IconProps } from "./types";

export const NotificationIcon: React.FC<IconProps> = (props) => (
  <Icon as={IoIosNotificationsOutline} {...props} />
);
