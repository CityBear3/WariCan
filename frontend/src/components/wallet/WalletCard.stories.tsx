import type { Meta, StoryObj } from "@storybook/react";
import { WalletCard } from "./WalletCard";

const meta: Meta<typeof WalletCard> = {
  component: WalletCard,
};

export default meta;
type Story = StoryObj<typeof WalletCard>;

const wallet = {
  balance: 5000,
  debt: 2000,
};

export const Normal: Story = {
  args: {
    wallet,
  },
};
