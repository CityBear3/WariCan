import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { TextField } from "@/components/input/TextField";
import { NormalCard } from "@/components/layout/NormalCard";
import { Section } from "@/components/layout/Section";
import { User } from "@/components/user/User";
import { UserList } from "@/components/user/UserList";
import { UserModel } from "@/domain/user";
import { Box, HStack, List, ListItem } from "@chakra-ui/react";

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

  return (
    <>
      <HeaderSpacer />
      <Section title="グループを作成する" margin="20px">
        <NormalCard marginTop="20px" padding="10px">
          <Box>
            <TextField placeholder="グループ名を入力します" fontSize="20px" />
          </Box>
          <Box marginTop="10px">
            <TextField placeholder="説明を入力します" />
          </Box>
          <HStack width="100%" justifyContent="end" marginTop="10px">
            <UserList users={[]} />
          </HStack>
        </NormalCard>
      </Section>
      <Section title="メンバー" margin="20px">
        <List>
          {members.map((member) => (
            <ListItem key={member.id} margin="20px 0px">
              <User user={member} />
            </ListItem>
          ))}
        </List>
      </Section>
      <HStack width="100%" justifyContent="center" marginTop="10px">
        <PrimaryButton label="作成する" fontSize="20px" padding="25px 100px" />
      </HStack>
    </>
  );
};

export default CreateGroup;
