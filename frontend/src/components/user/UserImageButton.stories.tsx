import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { UserImageButton } from "./UserImageButton";

const meta: Meta<typeof UserImageButton> = {
  component: UserImageButton,
};

export default meta;
type Story = StoryObj<typeof UserImageButton>;

const user: UserModel = {
  id: "sample id",
  name: "John Smith",
  imageUrl: "http://localhost:3000/sample_profile.png",
  tag: "#camp\n#BBQ",
};

export const Normal: Story = {
  args: {
    user,
    onClick: () => {
      alert("clicked");
    },
  },
};

export const Check: Story = {
  args: {
    user,
    withIcon: "check",
    onClick: () => {
      alert("clicked");
    },
  },
};

export const Pending: Story = {
  args: {
    user,
    withIcon: "pending",
    onClick: () => {
      alert("clicked");
    },
  },
};
