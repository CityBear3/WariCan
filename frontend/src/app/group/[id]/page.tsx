"use client";

import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupCard } from "@/components/group/GroupCard";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { SplitBillingRow } from "@/components/splitBilling/SplitBillingRow";
import { UserList } from "@/components/user/UserList";
import { GroupModel } from "@/domain/group";
import { UserModel } from "@/domain/user";
import { Box, HStack, List, ListItem, VStack } from "@chakra-ui/react";

type Props = {
  params: {
    id: string;
  };
};

const Group: React.FC<Props> = ({ params: { id } }) => {
  const members: UserModel[] = [
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
  const group: GroupModel = {
    id,
    name: "劇団ロッソの四国旅行",
    description:
      "劇団ロッソの四国旅行では、1日目は香川で讃岐うどんと金刀比羅宮、2日目は高知で桂浜と龍馬記念館、3日目は徳島の渦潮、最終日は愛媛の道後温泉を楽しみます。充実の旅をお楽しみに！",
    members,
    splitBillings: [
      {
        id: "sample id 1",
        name: "二次会 @居酒屋まっさん",
        amount: 50000,
        advancePayer: members[0],
        members,
        type: "EQUAL_SPLIT",
        status: "ACTIVE",
      },
      {
        id: "sample id 2",
        name: "二次会 @居酒屋まっさん",
        amount: 50000,
        advancePayer: members[0],
        members,
        type: "EQUAL_SPLIT",
        status: "CLOSED",
      },
    ],
  };

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px">
        <GroupCard group={group} />
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
          {group.splitBillings.map((splitBilling) => (
            <ListItem key={splitBilling.id} margin="20px 0px">
              <SplitBillingRow splitBilling={splitBilling} />
            </ListItem>
          ))}
        </List>
      </FoldableSection>
      <FoldableSection title="メンバー" margin="20px">
        <UserList users={group.members} />
      </FoldableSection>
      <VStack width="100%" alignItems="center" marginTop="10px">
        <SecondaryButton
          label="お誘いを送る"
          fontSize="20px"
          padding="25px 30px"
        />
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
