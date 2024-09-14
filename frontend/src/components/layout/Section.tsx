import { Box, Center, Heading } from "@chakra-ui/react";
import { ComponentProps, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
} & ComponentProps<typeof Box>;

const boxProps = {
  width: "80%",
};

export const Section: React.FC<Props> = ({ children, title, ...props }) => (
  <Center h="100%">
    <Box {...boxProps} {...props}>
      <Heading size="lg">{title}</Heading>
      {children}
    </Box>
  </Center>
);
