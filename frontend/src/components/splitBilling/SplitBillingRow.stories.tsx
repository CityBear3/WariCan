import type { Meta, StoryObj } from "@storybook/react";
import { SplitBillingRow } from "./SplitBillingRow";
import { SplitBillingModel } from "@/domain/splitBilling";
import { UserModel } from "@/domain/user";

const meta: Meta<typeof SplitBillingRow> = {
  component: SplitBillingRow,
};

export default meta;
type Story = StoryObj<typeof SplitBillingRow>;

const members: UserModel[] = [
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

export const Closed: Story = {
  args: {
    splitBilling: { ...splitBilling, status: "CLOSED" },
  },
};
