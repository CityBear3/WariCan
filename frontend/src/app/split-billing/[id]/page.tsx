import { HeaderSpacer } from "@/app/header";
import { DisabledButton } from "@/components/button/DisabledButton";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { FoldableSection } from "@/components/layout/FoldableSection";
import { SplitBillingCard } from "@/components/splitBilling/SplitBillingCard";
import { MoneyText } from "@/components/text/MoneyText";
import { UserList } from "@/components/user/UserList";
import { SplitBillingModel } from "@/domain/splitBilling";
import { UserModel } from "@/domain/user";
import { Box, Heading, HStack, VStack } from "@chakra-ui/react";

type Props = {
  params: {
    id: string;
  };
};

const SplitBilling: React.FC<Props> = ({ params: { id } }) => {
  const members: UserModel[] = [
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

  const splitBilling: SplitBillingModel = {
    id,
    name: "二次会 @居酒屋まっさん",
    amount: 50000,
    advancePayer: members[0],
    members,
    type: "EQUAL_SPLIT",
    status: "ACTIVE",
  };

  return (
    <>
      <HeaderSpacer />
      <Box margin="20px">
        <SplitBillingCard splitBilling={splitBilling} />
      </Box>
      <HStack justifyContent="space-between" margin="20px 40px">
        <Heading size="lg">未精算分</Heading>
        <MoneyText amount={5000} fontSize="24px" />
      </HStack>
      <FoldableSection title="精算状況" margin="20px">
        <UserList users={splitBilling.members} />
      </FoldableSection>
      <VStack width="100%" alignItems="center" marginTop="10px">
        {splitBilling.status === "ACTIVE" && (
          <PrimaryButton label="完了する" fontSize="20px" padding="25px 30px" />
        )}
        {splitBilling.status === "CLOSED" && (
          <DisabledButton
            label="完了済み"
            fontSize="20px"
            padding="25px 30px"
          />
        )}
      </VStack>
    </>
  );
};

export default SplitBilling;
