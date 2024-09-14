import { Button } from "@chakra-ui/react";

type Props = {
  label: string;
};
export const SecondaryButton: React.FC<Props> = ({ label }) => (
  <Button colorScheme="primary" variant="outline">
    {label}
  </Button>
);
