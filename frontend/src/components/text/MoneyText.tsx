import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  amount: number;
} & ComponentProps<typeof Text>;

export const MoneyText: React.FC<Props> = ({ amount, ...props }) => (
  <Text {...props}>{amount.toLocaleString()} 円</Text>
);
