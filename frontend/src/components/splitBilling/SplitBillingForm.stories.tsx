import type { Meta, StoryObj } from "@storybook/react";
import { SplitBillingForm } from "./SplitBillingForm";

const meta: Meta<typeof SplitBillingForm> = {
  component: SplitBillingForm,
};

export default meta;
type Story = StoryObj<typeof SplitBillingForm>;

const advancePayer = {
  id: "sample id 1",
  name: "三島 智昭",
  imageUrl: "http://localhost:3000/sample_profile.png",
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

export const Normal: Story = {
  args: {
    members,
    advancePayer,
  },
};
