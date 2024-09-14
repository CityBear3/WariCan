import { SplitBillingModel } from "@/domain/splitBilling";
import { NormalCard } from "../layout/NormalCard";
import {
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { User } from "@/components/user/User";
import { MoneyText } from "../text/MoneyText";
import { SplitBillingTypeText } from "../text/SplitBillingTypeText";
import { UserImageList } from "../user/UserImageList";

type Props = {
  splitBilling: SplitBillingModel;
};

const tableProps = {
  borderStyle: "none",
  padding: "10px 20px",
  fontSize: "20px",
};

const tdProps = {
  ...tableProps,
  textAlign: "start",
  paddingRight: 0,
} as const;

const thProps = {
  ...tableProps,
  textAlign: "end",
  paddingLeft: 0,
  borderRightStyle: "solid",
  borderRightWidth: "1px",
  borderRightColor: "gray.dark",
  style: { font: "inherit", color: "inherit", fontSize: "20px" },
} as const;

export const SplitBillingCard: React.FC<Props> = ({ splitBilling }) => (
  <NormalCard>
    <Stack
      divider={<StackDivider borderColor="gray.dark" />}
      spacing="4"
      margin="10px 20px"
    >
      <CardHeader padding="0" marginTop="20px">
        <Heading size="md" textAlign="center">
          {splitBilling.name}
        </Heading>
      </CardHeader>
      <CardBody padding="0">
        <Table>
          <Tbody>
            <Tr>
              <Th {...thProps}>立て替え</Th>
              <Td {...tdProps}>
                <User user={splitBilling.advancePayer} />
              </Td>
            </Tr>
            <Tr>
              <Th {...thProps}>合計金額</Th>
              <Td {...tdProps}>
                <MoneyText amount={splitBilling.amount} />
              </Td>
            </Tr>
            <Tr>
              <Th {...thProps}>割り勘方法</Th>
              <Td {...tdProps}>
                <SplitBillingTypeText type={splitBilling.type} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <HStack width="100%" justifyContent="end" marginTop="10px">
          <UserImageList users={splitBilling.members} />
        </HStack>
      </CardBody>
    </Stack>
  </NormalCard>
);
