"use client";

import { useConnectedUsers } from "@/api/hooks/connection";
import { HeaderSpacer } from "@/app/header";
import { groupCreatePath } from "@/app/path";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { ProfileSlide } from "@/components/connection/ProfileSlide";
import { TextField } from "@/components/input/TextField";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type Props = {
  params: {
    id: string;
  };
};

const ConnectionSlide: React.FC<Props> = ({ params: { id } }) => {
  type FormValues = {
    message: string;
  };
  const methods = useForm<FormValues>();

  const router = useRouter();

  const searchParams = useSearchParams();
  const keywords = searchParams.getAll("keyword");
  const members = searchParams.getAll("member");

  const [focusId, setFocusId] = useState<string>(id);

  const { users, isLoading, isError } = useConnectedUsers();
  if (isLoading || isError || !users) return <></>;

  const filteredUsers = users.filter(
    (user) =>
      keywords.every(
        (keyword) => user.tag.includes(keyword) || user.name.includes(keyword)
      ) && !members.includes(user.id)
  );

  const onProfileChange = (idx: number) => {
    const user = filteredUsers[idx];
    setFocusId(user.id);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: FormValues) => {
    router.push(groupCreatePath([...members, focusId]));
  };

  return (
    <>
      <FormProvider {...methods}>
        <HeaderSpacer />
        <ProfileSlide
          users={filteredUsers}
          focusId={id}
          onProfileChange={onProfileChange}
          margin="40px 0"
        />
        <FoldableSection title="メッセージを送る" margin="20px">
          <TextField placeholder="メッセージを入力します" name="message" />
        </FoldableSection>
        <HStack width="100%" justifyContent="center" marginTop="10px">
          <PrimaryButton
            label="お誘いを送る"
            fontSize="20px"
            padding="25px 80px"
            onClick={methods.handleSubmit(onSubmit)}
          />
        </HStack>
      </FormProvider>
    </>
  );
};

export default ConnectionSlide;
