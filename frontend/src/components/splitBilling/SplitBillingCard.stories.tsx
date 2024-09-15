import type { Meta, StoryObj } from "@storybook/react";
import { SplitBillingModel } from "@/domain/splitBilling";
import { UserModel } from "@/domain/user";
import { SplitBillingCard } from "./SplitBillingCard";

const meta: Meta<typeof SplitBillingCard> = {
  component: SplitBillingCard,
};

export default meta;
type Story = StoryObj<typeof SplitBillingCard>;

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
  id: "sample id",
  name: "二次会 @居酒屋まっさん",
  amount: 50000,
  advancePayer: members[0],
  members,
  type: "EQUAL_SPLIT",
  status: "ACTIVE",
};

export const Active: Story = {
  args: {
    splitBilling,
  },
};
