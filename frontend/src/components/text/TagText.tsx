import { Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

type Props = {
  tag: string;
} & ComponentProps<typeof Text>;

export const TagText: React.FC<Props> = ({ tag, ...props }) => (
  <Text color="gray.dark" fontSize="20px" {...props}>
    {tag.split("\n").reduce(
      (node, text, index) => (
        <>
          {node}
          {index > 0 ? <br /> : null}
          {text}
        </>
      ),
      <></>
    )}
  </Text>
);
