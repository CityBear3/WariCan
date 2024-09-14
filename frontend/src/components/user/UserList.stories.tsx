import type { Meta, StoryObj } from "@storybook/react";
import { UserModel } from "@/domain/user";
import { UserList } from "./UserList";

const meta: Meta<typeof UserList> = {
  component: UserList,
};

export default meta;
type Story = StoryObj<typeof UserList>;

const users: UserModel[] = [
  {
    id: "sample id 1",
    name: "John Smith",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#camp\n#BBQ",
  },
  {
    id: "sample id 2",
    name: "John Smith",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#camp\n#BBQ",
  },
];

export const Normal: Story = {
  args: {
    users,
  },
};

export const Sized: Story = {
  args: {
    users,
  },
};
