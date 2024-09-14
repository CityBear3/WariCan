import { Button } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  label: string;
} & ComponentProps<typeof Button>;
export const SecondaryButton: React.FC<Props> = ({ label, ...props }) => (
  <Button colorScheme="primary" variant="outline" {...props}>
    {label}
  </Button>
);
