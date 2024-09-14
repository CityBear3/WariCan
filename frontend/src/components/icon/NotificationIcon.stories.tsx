import type { Meta, StoryObj } from "@storybook/react";
import { NotificationIcon } from "./NotificationIcon";

const meta: Meta<typeof NotificationIcon> = {
  component: NotificationIcon,
};

export default meta;
type Story = StoryObj<typeof NotificationIcon>;

export const Primary: Story = {
  args: {},
};
