import { Box, CardBody, HStack, IconButton, Text } from "@chakra-ui/react";
import { NormalCard } from "../layout/NormalCard";
import { CloseIcon } from "@chakra-ui/icons";
import { ComponentProps } from "react";

type Props = {
  keyword: string;
  onDelete?: () => void;
} & ComponentProps<typeof Box>;

export const Keyword: React.FC<Props> = ({ keyword, onDelete, ...props }) => {
  return (
    <Box display="inline-block" {...props}>
      <NormalCard borderRadius="10px">
        <CardBody padding="0" paddingLeft="10px">
          <HStack spacing="0">
            <Text>{keyword}</Text>
            <IconButton
              aria-label="close"
              colorScheme="transparent"
              height="100%"
              icon={<CloseIcon color="gray.dark" boxSize="0.8em" />}
              onClick={onDelete}
            ></IconButton>
          </HStack>
        </CardBody>
      </NormalCard>
    </Box>
  );
};
