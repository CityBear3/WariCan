import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { UserName } from "./UserName";

const meta: Meta<typeof UserName> = {
  component: UserName,
};

export default meta;
type Story = StoryObj<typeof UserName>;

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

export const Sized: Story = {
  args: {
    user,
    nameSize: "32px",
    titleSize: "24px",
  },
};
