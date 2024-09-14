import { SplitBillingModel } from "@/domain/splitBilling";
import { Text } from "@chakra-ui/react";

type Props = {
  type: SplitBillingModel["type"];
};

const SPLIT_BILLING_TYPE: { [key in SplitBillingModel["type"]]: string } = {
  EQUAL_SPLIT: "均等割",
} as const;

export const SplitBillingTypeText: React.FC<Props> = ({ type }) => (
  <Text>{SPLIT_BILLING_TYPE[type]}</Text>
);
