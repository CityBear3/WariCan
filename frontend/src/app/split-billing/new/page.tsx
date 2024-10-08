"use client";

import { HeaderSpacer } from "@/app/header";
import { splitBillingPath } from "@/app/path";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { Section } from "@/components/layout/Section";
import { SplitBillingForm } from "@/components/splitBilling/SplitBillingForm";
import { UserList } from "@/components/user/UserList";
import { HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

const CreateSplitBilling: React.FC = () => {
  const user = {
    id: "sample id",
    name: "三島 智昭",
    imageUrl: "/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  };

  const members = [
    {
      id: "sample id 1",
      name: "三島 智昭",
      imageUrl: "http://localhost:3000/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
    {
      id: "sample id 2",
      name: "大河 照之",
      imageUrl: "http://localhost:3000/sample_profile.png",
      tag: "#キャンプ\n#プログラミング",
    },
  ];

  const router = useRouter();

  const searchParams = useSearchParams();
  const groupId = searchParams.get("groupId") ?? "";

  type FormValues = {
    description: string;
    amount: number;
  };

  const methods = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    router.push(splitBillingPath(groupId, values));
  };

  return (
    <FormProvider {...methods}>
      <HeaderSpacer />
      <Section title="割り勘を作成する" margin="20px">
        <SplitBillingForm advancePayer={user} members={members} />
      </Section>
      <FoldableSection title="メンバー" margin="20px">
        <UserList users={members} />
      </FoldableSection>
      <HStack width="100%" justifyContent="center" marginTop="10px">
        <PrimaryButton
          label="作成する"
          onClick={methods.handleSubmit(onSubmit)}
          fontSize="20px"
          padding="25px 80px"
        />
      </HStack>
    </FormProvider>
  );
};

export default CreateSplitBilling;
