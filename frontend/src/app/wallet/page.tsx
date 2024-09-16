"use client";

import { Box, HStack, List, ListItem } from "@chakra-ui/react";
import { HeaderSpacer } from "../header";
import { WalletCard } from "@/components/wallet/WalletCard";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { Section } from "@/components/layout/Section";
import { SplitBillingRow } from "@/components/splitBilling/SplitBillingRow";
import { useWallet } from "@/api/hooks/wallet";

const buttonProps = {
  padding: "25px 40px",
  margin: "0 30px",
  fontSize: "20px",
};

const Wallet: React.FC = () => {
  const { isLoading, isError, wallet } = useWallet();

  const members = [
    {
      id: "sample id 1",
      name: "三島 智昭",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "sample id 2",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];
  const splitBillings = [
    {
      id: "sample id 1",
      name: "二次会 @居酒屋まっさん",
      groupId: "sample id",
      amount: 50000,
      advancePayer: members[0],
      members,
      type: "EQUAL_SPLIT",
      status: "ACTIVE",
    },
    {
      id: "sample id 2",
      name: "二次会 @居酒屋まっさん",
      groupId: "sample id",
      amount: 50000,
      advancePayer: members[0],
      members,
      type: "EQUAL_SPLIT",
      status: "ACTIVE",
    },
  ] as const;

  const onDepositClick = () => {};

  const onWithdrawClick = () => {};

  if (isLoading || isError) return <></>;
  if (!wallet) return <></>;

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px">
        <WalletCard wallet={wallet} />
      </Box>
      <HStack justifyContent="center" marginBottom="40px">
        <SecondaryButton
          label="入金する"
          {...buttonProps}
          onClick={onDepositClick}
        />
        <SecondaryButton
          label="出金する"
          {...buttonProps}
          onClick={onWithdrawClick}
        />
      </HStack>
      <Section title="未精算の割り勘" margin="20px">
        <List>
          {splitBillings.map((splitBilling) => (
            <ListItem key={splitBilling.id} margin="20px 0px">
              <SplitBillingRow splitBilling={splitBilling} />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};

export default Wallet;
