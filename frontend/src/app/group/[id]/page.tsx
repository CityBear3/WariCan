"use client";

import { useGroup } from "@/api/hooks/group";
import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupCard } from "@/components/group/GroupCard";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { SplitBillingRow } from "@/components/splitBilling/SplitBillingRow";
import { UserList } from "@/components/user/UserList";
import { UserModel } from "@/domain/user";
import { Box, HStack, List, ListItem, VStack } from "@chakra-ui/react";

type Props = {
  params: {
    id: string;
  };
};

const Group: React.FC<Props> = ({ params: { id } }) => {
  const users: UserModel[] = [
    {
      id: "cf290bee-9eb4-4e28-bea9-c8c3b37cb621",
      name: "三島 智昭",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "cf290bee-9eb4-4e28-bea9-c8c3b37cb622",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];

  const { group, splitBillings, isLoading, isError } = useGroup({ id });
  if (isLoading || isError) return <></>;
  if (!group || !splitBillings) return <></>;

  const members = users.filter((user) => group.members.includes(user.id));

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px">
        <GroupCard group={group} members={members} />
      </Box>
      <HStack
        width="100%"
        justifyContent="center"
        marginTop="20px"
        marginBottom="40px"
      >
        <PrimaryButton label="割り勘する" fontSize="20px" padding="25px 50px" />
      </HStack>
      <FoldableSection title="これまでの割り勘" margin="20px">
        <List>
          {splitBillings.map((splitBilling) => (
            <ListItem key={splitBilling.id} margin="20px 0px">
              <SplitBillingRow splitBilling={splitBilling} />
            </ListItem>
          ))}
        </List>
      </FoldableSection>
      <FoldableSection title="メンバー" margin="20px">
        <UserList users={members} />
      </FoldableSection>
      <VStack width="100%" alignItems="center" marginTop="10px">
        <SecondaryButton
          label="招待コードで追加する"
          fontSize="20px"
          padding="25px 30px"
        />
      </VStack>
    </>
  );
};

export default Group;
