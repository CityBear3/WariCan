"use client";

import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { ProfileSlide } from "@/components/connection/ProfileSlide";
import { TextField } from "@/components/input/TextField";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { HStack } from "@chakra-ui/react";

type Props = {
  params: {
    id: string;
  };
};

const ConnectionSlide: React.FC<Props> = ({ params: { id } }) => {
  const users = [
    {
      id: "1",
      name: "三島 智昭",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "2",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "3",
      name: "小島 健太郎",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "4",
      name: "細川 由美",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "5",
      name: "城島 美咲",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];

  return (
    <>
      <HeaderSpacer />
      <ProfileSlide users={users} focusId={id} margin="40px 0" />
      <FoldableSection title="メッセージを送る" margin="20px">
        <TextField placeholder="メッセージを入力します" />
      </FoldableSection>
      <HStack width="100%" justifyContent="center" marginTop="10px">
        <PrimaryButton
          label="お誘いを送る"
          fontSize="20px"
          padding="25px 80px"
        />
      </HStack>
    </>
  );
};

export default ConnectionSlide;
