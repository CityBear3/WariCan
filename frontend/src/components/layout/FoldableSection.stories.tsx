import type { Meta, StoryObj } from "@storybook/react";
import { FoldableSection } from "./FoldableSection";
import { Button } from "@chakra-ui/react";

const meta: Meta<typeof FoldableSection> = {
  component: FoldableSection,
};

export default meta;
type Story = StoryObj<typeof FoldableSection>;

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
