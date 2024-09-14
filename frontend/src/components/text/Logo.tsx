import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

const logoProps = {
  fontSize: "32px",
  fontWeight: "bold",
};

type Props = ComponentProps<typeof Text>;

export const Logo: React.FC<Props> = ({ ...props }) => (
  <Text {...logoProps} {...props}>
    WARICAN
  </Text>
);
