import { Button } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  label: string;
} & ComponentProps<typeof Button>;

export const PrimaryButton: React.FC<Props> = ({ label, ...props }) => (
  <Button colorScheme="primary" {...props}>
    {label}
  </Button>
);
