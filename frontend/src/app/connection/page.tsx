"use client";

import { useConnectedUsers } from "@/api/hooks/connection";
import { HeaderSpacer } from "@/app/header";
import { Keyword } from "@/components/connection/Keyword";
import { ProfileTable } from "@/components/connection/ProfileTable";
import { TextField } from "@/components/input/TextField";
import { Box } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { connectionSliderPath } from "@/app/path";

const ConnectionBoard: React.FC = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const members = searchParams.getAll("member");

  type FormValues = {
    keyword: string;
  };
  const methods = useForm<FormValues>();

  const [keywords, setKeywords] = useState<string[]>([]);

  const { users, isLoading, isError } = useConnectedUsers();
  if (isLoading || isError || !users) return <></>;

  const onSubmit = (values: FormValues) => {
    setKeywords([...keywords, values.keyword]);
    methods.reset();
  };

  const onDelete = (value: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== value));
  };

  const onProfileClick = (userId: string) => {
    router.push(connectionSliderPath(userId, { keywords, members }));
  };

  const filteredUsers = users.filter(
    (user) =>
      keywords.every(
        (keyword) => user.tag.includes(keyword) || user.name.includes(keyword)
      ) && !members.includes(user.id)
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <HeaderSpacer />
        <Box margin="20px 10px">
          {keywords.map((keyword) => (
            <Keyword
              keyword={keyword}
              margin="5px 5px"
              key={keyword}
              onDelete={() => onDelete(keyword)}
            />
          ))}
        </Box>
        <TextField
          placeholder="キーワードを入力します"
          name="keyword"
          margin="10px 20px"
          width="400px"
        />
        <ProfileTable
          users={filteredUsers}
          onProfileClick={onProfileClick}
          margin="40px 20px"
        />
      </form>
    </FormProvider>
  );
};

export default ConnectionBoard;
