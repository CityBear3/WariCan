"use client";

import { HeaderSpacer } from "@/app/header";
import { Keyword } from "@/components/connection/Keyword";
import { ProfileTable } from "@/components/connection/ProfileTable";
import { TextField } from "@/components/input/TextField";
import { Box } from "@chakra-ui/react";

const ConnectionBoard: React.FC = () => {
  const keywords = ["#キャンプ", "#プログラミング", "#BBQ"];
  const users = [
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
    {
      id: "sample id 3",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "sample id 4",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "sample id 5",
      name: "大河 照之",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px 15px">
        {keywords.map((keyword) => (
          <Keyword keyword={keyword} margin="0 5px" key={keyword} />
        ))}
      </Box>
      <TextField placeholder="キーワードを入力します" margin="10px 20px" />
      <ProfileTable users={users} margin="40px 20px" />
    </>
  );
};

export default ConnectionBoard;
