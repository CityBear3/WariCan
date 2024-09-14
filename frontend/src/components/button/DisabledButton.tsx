import { Button } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  label: string;
} & ComponentProps<typeof Button>;

export const DisabledButton: React.FC<Props> = ({ label, ...props }) => (
  <Button colorScheme="disabled" {...props} disabled={true}>
    {label}
  </Button>
);
