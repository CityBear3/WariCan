import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "./SecondaryButton";

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Primary: Story = {
  args: {
    label: "Sample Button",
  },
};
