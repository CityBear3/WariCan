import type { Meta, StoryObj } from "@storybook/react";
import { NormalCard } from "./NormalCard";

const meta: Meta<typeof NormalCard> = {
  component: NormalCard,
};

export default meta;
type Story = StoryObj<typeof NormalCard>;

export const Primary: Story = {
  args: {
    children: <span>Hello</span>,
  },
};
