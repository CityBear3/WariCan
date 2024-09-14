import { HStack, Text } from "@chakra-ui/react";
import { NotificationIcon } from "../icon/NotificationIcon";

type Props = {
  text: string;
  size?: string;
  color?: string;
};

const textProps = {
  verticalAlign: "middle",
};

export const NotificationText: React.FC<Props> = ({
  text,
  size = "24px",
  color = "black",
}) => (
  <HStack>
    <NotificationIcon color={color} boxSize={size} />
    <Text color={color} fontSize={size} {...textProps}>
      {text}
    </Text>
  </HStack>
);
