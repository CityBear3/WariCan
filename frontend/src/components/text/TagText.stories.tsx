import type { Meta, StoryObj } from "@storybook/react";
import { TagText } from "./TagText";

const meta: Meta<typeof TagText> = {
  component: TagText,
};

export default meta;
type Story = StoryObj<typeof TagText>;

export const Normal: Story = {
  args: {
    tag: "#キャンプ\n#プログラミング",
  },
};
