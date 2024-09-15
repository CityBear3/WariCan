"use client";

import { useConnectedUsers } from "@/api/hooks/connection";
import { useGroup } from "@/api/hooks/group";
import { HeaderSpacer } from "@/app/header";
import { splitBillingCreatePath } from "@/app/path";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupCard } from "@/components/group/GroupCard";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { SplitBillingRow } from "@/components/splitBilling/SplitBillingRow";
import { UserList } from "@/components/user/UserList";
import { Box, HStack, List, ListItem, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const Group: React.FC<Props> = ({ params: { id } }) => {
  const router = useRouter();

  const { users, ...usersState } = useConnectedUsers();

  const { group, splitBillings, ...groupState } = useGroup({ id });

  if (usersState.isLoading || usersState.isError || !users) return <></>;
  if (groupState.isLoading || groupState.isError) return <></>;
  if (!group || !splitBillings) return <></>;

  const members = users.filter((user) => group.members.includes(user.id));

  const onSplitBilling = () => {
    router.push(splitBillingCreatePath(id));
  };

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
        <PrimaryButton
          label="割り勘する"
          fontSize="20px"
          padding="25px 50px"
          onClick={onSplitBilling}
        />
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
