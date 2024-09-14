import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryCard } from "./PrimaryCard";

const meta: Meta<typeof PrimaryCard> = {
  component: PrimaryCard,
};

export default meta;
type Story = StoryObj<typeof PrimaryCard>;

export const Primary: Story = {
  args: {
    children: <span>Hello</span>,
  },
};
