import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "./Button";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const Primary: Story = {
  args: {},
};
