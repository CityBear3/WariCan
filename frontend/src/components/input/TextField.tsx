import { Input } from "@chakra-ui/react";
import { ComponentProps } from "react";
type Props = {
  placeholder: string;
} & ComponentProps<typeof Input>;

export const TextField: React.FC<Props> = ({ placeholder, ...props }) => (
  <Input
    placeholder={placeholder}
    variant="flushed"
    display="block"
    {...props}
  ></Input>
);
