import {
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import { PrimaryCard } from "../layout/PrimaryCard";
import { MoneyText } from "../text/MoneyText";
import { WalletModel } from "@/domain/wallet";

type Props = {
  wallet: WalletModel;
  fullSize?: boolean;
};

const tableProps = {
  borderStyle: "none",
  padding: "10px 20px",
  fontSize: "20px",
};

const tdProps = {
  ...tableProps,
  textAlign: "end",
  paddingRight: 0,
} as const;

const thProps = {
  ...tableProps,
  textAlign: "start",
  paddingLeft: 0,
  style: { font: "inherit", color: "inherit", fontSize: "20px" },
} as const;

export const WalletCard: React.FC<Props> = ({ wallet, fullSize = true }) => (
  <PrimaryCard>
    <Stack
      divider={<StackDivider />}
      spacing="4"
      margin="10px 20px"
      marginBottom={fullSize ? "25px" : "10px"}
    >
      {fullSize && (
        <CardHeader padding="0" marginTop="20px">
          <Heading>Wallet</Heading>
        </CardHeader>
      )}
      <CardBody padding="0 10px">
        <Table>
          <Tbody>
            <Tr>
              <Th {...thProps}>現在残高</Th>
              <Td {...tdProps}>
                <MoneyText amount={wallet.balance} />
              </Td>
            </Tr>
            {fullSize && (
              <Tr>
                <Th {...thProps}>未精算分</Th>
                <Td {...tdProps}>
                  <MoneyText amount={wallet.debt} />
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </CardBody>
    </Stack>
  </PrimaryCard>
);
