import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { ProfileTile } from "./ProfileTile";

const meta: Meta<typeof ProfileTile> = {
  component: ProfileTile,
};

export default meta;
type Story = StoryObj<typeof ProfileTile>;

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
