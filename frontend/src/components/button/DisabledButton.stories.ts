import type { Meta, StoryObj } from "@storybook/react";

import { DisabledButton } from "./DisabledButton";

const meta: Meta<typeof DisabledButton> = {
  component: DisabledButton,
};

export default meta;
type Story = StoryObj<typeof DisabledButton>;

export const Primary: Story = {
  args: {
    label: "Sample Button",
  },
};
