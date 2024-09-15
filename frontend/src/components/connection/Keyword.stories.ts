import type { Meta, StoryObj } from "@storybook/react";

import { Keyword } from "./Keyword";

const meta: Meta<typeof Keyword> = {
  component: Keyword,
};

export default meta;
type Story = StoryObj<typeof Keyword>;

export const Primary: Story = {
  args: {
    keyword: "#キャンプ",
  },
};
