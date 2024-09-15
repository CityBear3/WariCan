import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";
import { Button } from "@chakra-ui/react";

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

export const WithButton: Story = {
  args: {
    title: "Some Title",
    children: <span>Hello</span>,
    side: <Button>Sample Button</Button>,
  },
};
