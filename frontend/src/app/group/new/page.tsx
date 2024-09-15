"use client";

import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupForm } from "@/components/group/GroupForm";
import { Section } from "@/components/layout/Section";
import { UserList } from "@/components/user/UserList";
import { HStack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useCreate } from "@/api/hooks/group";
import { GroupGetV1_Member } from "@/api/group/group_pb";
import { useRouter, useSearchParams } from "next/navigation";
import { connectionPath, groupPath } from "@/app/path";
import { useConnectedUsers } from "@/api/hooks/connection";

const CreateGroup: React.FC = () => {
  type FormValues = {
    groupName: string;
    groupDescription: string;
  };

  const router = useRouter();

  const searchParams = useSearchParams();
  const members = searchParams.getAll("member");

  const methods = useForm<FormValues>();

  const { mutate } = useCreate({
    onSuccess: ({ group }) => {
      router.push(groupPath(group.id));
    },
  });

  const { users, isLoading, isError } = useConnectedUsers();
  if (isLoading || isError || !users) return <></>;

  function onSubmit(values: FormValues) {
    mutate({
      name: values.groupName,
      description: values.groupDescription,
      members: members.map((member) =>
        GroupGetV1_Member.fromJson({
          userId: member,
        })
      ),
    });
  }

  const onSelectMember = () => {
    router.push(connectionPath({ members }));
  };

  const filteredUsers = users.filter((user) => members.includes(user.id));

  const inviteButton = (
    <SecondaryButton
      label="お誘いを送る"
      fontSize="20px"
      padding="25px"
      onClick={onSelectMember}
    />
  );

  return (
    <FormProvider {...methods}>
      <HeaderSpacer />
      <Section title="グループを作成する" margin="20px">
        <GroupForm />
      </Section>
      <Section title="メンバー" margin="20px" side={inviteButton}>
        <UserList users={filteredUsers} />
      </Section>
      <HStack width="100%" justifyContent="center" marginTop="10px">
        <PrimaryButton
          label="作成する"
          fontSize="20px"
          padding="25px 80px"
          onClick={methods.handleSubmit(onSubmit)}
          isLoading={methods.formState.isSubmitting}
        />
      </HStack>
    </FormProvider>
  );
};

export default CreateGroup;
