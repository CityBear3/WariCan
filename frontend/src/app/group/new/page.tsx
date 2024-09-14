"use client";

import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupForm } from "@/components/group/GroupForm";
import { Section } from "@/components/layout/Section";
import { User } from "@/components/user/User";
import { UserModel } from "@/domain/user";
import { HStack, List, ListItem } from "@chakra-ui/react";

const CreateGroup: React.FC = () => {
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

  const inviteButton = (
    <SecondaryButton
      label="お誘いを送る"
      fontSize="20px"
      padding="25px"
      onClick={() => alert("clicked")}
    />
  );

  return (
    <>
      <HeaderSpacer />
      <Section title="グループを作成する" margin="20px">
        <GroupForm />
      </Section>
      <Section title="メンバー" margin="20px" side={inviteButton}>
        <List>
          {members.map((member) => (
            <ListItem key={member.id} margin="20px 0px">
              <User user={member} />
            </ListItem>
          ))}
        </List>
      </Section>
      <HStack width="100%" justifyContent="center" marginTop="10px">
        <PrimaryButton label="作成する" fontSize="20px" padding="25px 80px" />
      </HStack>
    </>
  );
};

export default CreateGroup;
