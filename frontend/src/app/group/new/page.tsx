"use client";

import { HeaderSpacer } from "@/app/header";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { SecondaryButton } from "@/components/button/SecondaryButton";
import { GroupForm } from "@/components/group/GroupForm";
import { Section } from "@/components/layout/Section";
import { UserList } from "@/components/user/UserList";
import { UserModel } from "@/domain/user";
import { HStack } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { useCreate } from "@/api/hooks/group";
import { GroupGetV1_Member } from "@/api/group/group_pb";
import { useRouter } from "next/navigation";
import { groupPath } from "@/app/path";

const CreateGroup: React.FC = () => {
  const members: UserModel[] = [
    {
      id: "45E144DC-15A3-4F9F-8A6C-FD3F27B297B1",
      name: "三島 智昭",
      imageUrl: "/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "02E7AA00-3057-462A-98F6-0B076638BC25",
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

  type FormValues = {
    groupName: string;
    groupDescription: string;
  };

  const router = useRouter();

  const methods = useForm<FormValues>();

  const { mutate } = useCreate({
    onSuccess: ({ group }) => {
      router.push(groupPath(group.id));
    },
  });

  function onSubmit(values: FormValues) {
    mutate({
      name: values.groupName,
      description: values.groupDescription,
      members: members.map((member) =>
        GroupGetV1_Member.fromJson({
          userId: member.id,
        })
      ),
    });
  }

  return (
    <FormProvider {...methods}>
      <HeaderSpacer />
      <Section title="グループを作成する" margin="20px">
        <GroupForm />
      </Section>
      <Section title="メンバー" margin="20px" side={inviteButton}>
        <UserList users={members} />
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
