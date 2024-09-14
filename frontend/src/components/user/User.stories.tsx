import type { Meta, StoryObj } from "@storybook/react";
import { User } from "./User";
import { UserModel } from "@/domain/user";

const meta: Meta<typeof User> = {
  component: User,
};

export default meta;
type Story = StoryObj<typeof User>;

const user: UserModel = {
  id: "sample id",
  name: "John Smith",
  imageUrl: "http://localhost:3000/sample_profile.png",
  tag: "#camp\n#BBQ",
};

export const Normal: Story = {
  args: {
    user,
  },
};

export const Check: Story = {
  args: {
    user,
    withIcon: "check",
  },
};

export const Pending: Story = {
  args: {
    user,
    withIcon: "pending",
  },
};
