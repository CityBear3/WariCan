import { Input } from "@chakra-ui/react";
type Props = {
  placeholder: string;
};

export const TextField: React.FC<Props> = ({ placeholder }) => (
  <Input placeholder={placeholder} variant="flushed"></Input>
);
