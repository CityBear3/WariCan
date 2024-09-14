import { SplitBillingModel } from "@/domain/splitBilling";
import { Text } from "@chakra-ui/react";

type Props = {
  splitBilling: SplitBillingModel;
};

const SPLIT_BILLING_TYPE: { [key in SplitBillingModel["type"]]: string } = {
  EQUAL_SPLIT: "均等割",
} as const;

export const SplitBillingTypeText: React.FC<Props> = ({ splitBilling }) => (
  <Text>{SPLIT_BILLING_TYPE[splitBilling.type]}</Text>
);
