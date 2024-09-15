import type { Meta, StoryObj } from "@storybook/react";
import { MoneyText } from "./MoneyText";

const meta: Meta<typeof MoneyText> = {
  component: MoneyText,
};

export default meta;
type Story = StoryObj<typeof MoneyText>;

export const Normal: Story = {
  args: { amount: 50000 },
};
