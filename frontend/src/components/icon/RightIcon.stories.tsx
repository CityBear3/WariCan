import type { Meta, StoryObj } from "@storybook/react";
import { RightIcon } from "./RightIcon";

const meta: Meta<typeof RightIcon> = {
  component: RightIcon,
};

export default meta;
type Story = StoryObj<typeof RightIcon>;

export const Primary: Story = {
  args: {},
};
