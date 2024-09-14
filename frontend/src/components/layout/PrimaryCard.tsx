import { Card } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const cardProps = {
  bg: "primary.main",
  color: "primary.sub",
  borderRadius: "20px",
};

export const PrimaryCard: React.FC<Props> = ({ children }) => (
  <Card {...cardProps}>{children}</Card>
);
