import type { Meta, StoryObj } from "@storybook/react";
import { PendingIcon } from "./PendingIcon";

const meta: Meta<typeof PendingIcon> = {
  component: PendingIcon,
};

export default meta;
type Story = StoryObj<typeof PendingIcon>;

export const Primary: Story = {
  args: {},
};
