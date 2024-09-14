import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
export const Section: React.FC<Props> = ({ children, title }) => (
  <Box>
    <Heading size="lg">{title}</Heading>
    {children}
  </Box>
);
