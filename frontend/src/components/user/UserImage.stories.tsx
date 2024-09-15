import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { UserImage } from "./UserImage";

const meta: Meta<typeof UserImage> = {
  component: UserImage,
};

export default meta;
type Story = StoryObj<typeof UserImage>;

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

export const Small: Story = {
  args: {
    user,
    withIcon: "pending",
    size: 30,
  },
};
