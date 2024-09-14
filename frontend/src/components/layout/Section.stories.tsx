import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./section";

const meta: Meta<typeof Section> = {
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {
  args: {
    title: "Some Title",
    children: <span>Hello</span>,
  },
};
