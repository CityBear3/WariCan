import { SplitBillingModel } from "@/domain/splitBilling";
import { NormalCard } from "../layout/NormalCard";
import { Box, CardBody, HStack, Text } from "@chakra-ui/react";
import { CheckIcon } from "@/components/icon/CheckIcon";

type Props = {
  splitBilling: SplitBillingModel;
};

export const SplitBillingRow: React.FC<Props> = ({ splitBilling }) => (
  <NormalCard>
    <CardBody>
      <HStack alignItems="baseline">
        <Box width="20px">
          {splitBilling.status === "CLOSED" && <CheckIcon />}
        </Box>
        <Text>{splitBilling.name}</Text>
      </HStack>
    </CardBody>
  </NormalCard>
);
