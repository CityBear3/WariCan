import { Card } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  children: React.ReactNode;
} & ComponentProps<typeof Card>;

const cardProps = {
  bg: "white",
  color: "black",
  borderWidth: "2px",
  borderRadius: "20px",
  borderColor: "gray.dark",
  overflow: "hidden",
};

export const NormalCard: React.FC<Props> = ({ children, ...props }) => (
  <Card {...cardProps} {...props}>
    {children}
  </Card>
);
