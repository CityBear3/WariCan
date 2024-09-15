import type { Meta, StoryObj } from "@storybook/react";
import { MoneyField } from "./MoneyField";

const meta: Meta<typeof MoneyField> = {
  component: MoneyField,
};

export default meta;
type Story = StoryObj<typeof MoneyField>;

export const Normal: Story = {
  args: {
    placeholder: "金額を入力してください",
  },
};
