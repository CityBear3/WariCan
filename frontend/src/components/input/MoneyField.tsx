import { HStack, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { TextField } from "./TextField";

type Props = {
  placeholder: string;
  name: string;
} & ComponentProps<typeof Text>;

export const MoneyField: React.FC<Props> = ({
  placeholder,
  name,
  ...props
}) => (
  <HStack>
    <TextField placeholder={placeholder} name={name} {...props} />
    <Text> 円</Text>
  </HStack>
);
