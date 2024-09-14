import { Box, Center, Heading, HStack } from "@chakra-ui/react";
import { ComponentProps, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  height?: string;
  side?: ReactNode;
} & ComponentProps<typeof Box>;

const boxProps = {
  width: "80%",
};

export const Section: React.FC<Props> = ({
  children,
  title,
  height,
  side,
  ...props
}) => (
  <Center {...(height ? { h: height } : {})}>
    <Box {...boxProps} {...props}>
      <HStack justifyContent="space-between">
        <Heading size="lg">{title}</Heading>
        {side || <div></div>}
      </HStack>
      {children}
    </Box>
  </Center>
);
