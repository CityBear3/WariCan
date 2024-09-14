import type { Meta, StoryObj } from "@storybook/react";
import { DownIcon } from "./DownIcon";

const meta: Meta<typeof DownIcon> = {
  component: DownIcon,
};

export default meta;
type Story = StoryObj<typeof DownIcon>;

export const Primary: Story = {
  args: {},
};
