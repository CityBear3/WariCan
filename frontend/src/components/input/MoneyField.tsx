import { HStack, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { TextField } from "./TextField";

type Props = {
  placeholder: string;
} & ComponentProps<typeof Text>;

export const MoneyField: React.FC<Props> = ({ placeholder, ...props }) => (
  <HStack>
    <TextField placeholder={placeholder} {...props} />
    <Text> 円</Text>
  </HStack>
);
