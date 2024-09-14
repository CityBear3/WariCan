import { Card } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const cardProps = {
  bg: "white",
  color: "black",
  borderWidth: "2px",
  borderRadius: "lg",
  borderColor: "gray.dark",
};

export const NormalCard: React.FC<Props> = ({ children }) => (
  <Card {...cardProps}>{children}</Card>
);
