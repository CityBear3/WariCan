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
import { SplitBillingTypeText } from "../text/SplitBillingTypeText";
import { UserImageList } from "../user/UserImageList";
import { UserModel } from "@/domain/user";
import { TextField } from "@/components/input/TextField";
import { MoneyField } from "@/components/input/MoneyField";

type Props = {
  members: UserModel[];
  advancePayer: UserModel;
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

export const SplitBillingForm: React.FC<Props> = ({
  members,
  advancePayer,
}) => (
  <NormalCard>
    <Stack
      divider={<StackDivider borderColor="gray.dark" />}
      spacing="4"
      margin="10px 20px"
    >
      <CardHeader padding="0" marginTop="20px">
        <TextField placeholder="説明を入力してください" fontSize="20px" />
      </CardHeader>
      <CardBody padding="0">
        <Table>
          <Tbody>
            <Tr>
              <Th {...thProps}>立て替え</Th>
              <Td {...tdProps}>
                <User user={advancePayer} />
              </Td>
            </Tr>
            <Tr>
              <Th {...thProps}>合計金額</Th>
              <Td {...tdProps}>
                <MoneyField
                  placeholder="金額を入力してください"
                  fontSize="20px"
                />
              </Td>
            </Tr>
            <Tr>
              <Th {...thProps}>割り勘方法</Th>
              <Td {...tdProps}>
                <SplitBillingTypeText type={"EQUAL_SPLIT"} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <HStack width="100%" justifyContent="end" marginTop="10px">
          <UserImageList users={members} />
        </HStack>
      </CardBody>
    </Stack>
  </NormalCard>
);
