"use client";

import { Box, HStack, List, ListItem } from "@chakra-ui/react";
import { HeaderSpacer } from "./header";
import { WalletCard } from "@/components/wallet/WalletCard";
import { Section } from "@/components/layout/Section";
import { GroupCard } from "@/components/group/GroupCard";
import { useWallet } from "@/api/hooks/wallet";
import { useConnectedUsers } from "@/api/hooks/connection";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { useRouter } from "next/navigation";
import { groupCreatePath } from "./path";

const Wallet: React.FC = () => {
  const groups = [
    {
      id: "sample id1",
      name: "Tech.SummarCamp打ち上げ",
      description:
        "ハッカソンお疲れ様でした。どのプロダクトも素晴らしく、エンジニア学生のスキルの高さに驚いています。最終日の18時から打ち上げをするので、ぜひ参加してください。",
      ownerId: "sample id",
      members: [],
    },
    {
      id: "sample id2",
      name: "劇団ロッソの四国旅行",
      description:
        "毎年恒例の夏合宿の季節がやってきました。今年は8月20日から26日まで、徳島県と高知県に行きましょう！",
      ownerId: "sample id",
      members: [],
    },
    {
      id: "sample id3",
      name: "六甲山ドライブ",
      description:
        "来週末に行く六甲山ドライブ用のグループを作っときました。レンタカー代などはこちらから割り勘してください。",
      ownerId: "sample id",
      members: [],
    },
  ];

  const router = useRouter();

  const { wallet, ...walletState } = useWallet();
  const { users, ...usersState } = useConnectedUsers();

  if (walletState.isLoading || walletState.isError || !wallet) return <></>;
  if (usersState.isLoading || usersState.isError || !users) return <></>;

  const onCreateGroup = () => {
    router.push(groupCreatePath());
  };

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px" onClick={() => router.push("/wallet")}>
        <WalletCard wallet={wallet} fullSize={false} />
      </Box>
      <Section title="所属しているグループ" margin="20px">
        <HStack justifyContent="start" margin="20px 0">
          <SecondaryButton
            label="グループをつくる"
            fontSize="20px"
            padding="40px"
            width="100%"
            onClick={onCreateGroup}
          />
        </HStack>
        <List>
          {groups.map((group) => (
            <ListItem key={group.id} margin="20px 0px">
              <GroupCard group={group} members={users.slice(0, 3)} />
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};

export default Wallet;
