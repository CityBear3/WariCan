import { Box, Button } from "@chakra-ui/react";

type Props = {
  label: string;
};

export const PrimaryButton: React.FC<Props> = ({ label }) => (
  <Button colorScheme="primary">{label}</Button>
);
