import type { Meta, StoryObj } from "@storybook/react";

import { ProfileSlide } from "./ProfileSlide";

const meta: Meta<typeof ProfileSlide> = {
  component: ProfileSlide,
};

const users = [
  {
    id: "sample id 1",
    name: "三島 智昭",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  },
  {
    id: "sample id 2",
    name: "大河 照之",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  },
  {
    id: "sample id 3",
    name: "小島 健太郎",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  },
  {
    id: "sample id 4",
    name: "細川 由美",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  },
  {
    id: "sample id 5",
    name: "城島 美咲",
    imageUrl: "http://localhost:3000/sample_profile.png",
    tag: "#キャンプ\n#プログラミング",
  },
];

export default meta;
type Story = StoryObj<typeof ProfileSlide>;

export const Primary: Story = {
  args: {
    users,
  },
};

export const Focus: Story = {
  args: {
    users,
    focusId: "sample id 4",
  },
};

export const NotFound: Story = {
  args: {
    users,
    focusId: "sample id 999",
  },
};
