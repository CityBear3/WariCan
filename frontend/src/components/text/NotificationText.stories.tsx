import type { Meta, StoryObj } from "@storybook/react";
import { NotificationText } from "./NotificationText";

const meta: Meta<typeof NotificationText> = {
  component: NotificationText,
};

export default meta;
type Story = StoryObj<typeof NotificationText>;

export const Normal: Story = {
  args: {
    text: "notification",
  },
};
