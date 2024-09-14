import type { Meta, StoryObj } from "@storybook/react";
import { SplitBillingForm } from "./SplitBillingForm";

const meta: Meta<typeof SplitBillingForm> = {
  component: SplitBillingForm,
};

export default meta;
type Story = StoryObj<typeof SplitBillingForm>;

const user = {
  id: "sample id",
  name: "三島 智昭",
  imageUrl: "http://localhost:3000/sample_profile.png",
  tag: "#キャンプ\n#プログラミング",
};

export const Normal: Story = {
  args: {
    advancePayer: user,
  },
};
