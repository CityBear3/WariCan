import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const cardProps = {
  bg: "primary.main",
  color: "primary.sub",
};

export const PrimaryCard: React.FC<Props> = ({ children }) => (
  <Card {...cardProps}>{children}</Card>
);
