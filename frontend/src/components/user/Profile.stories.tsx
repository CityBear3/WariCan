import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { Profile } from "./Profile";

const meta: Meta<typeof Profile> = {
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

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
