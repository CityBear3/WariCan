import type { Meta, StoryObj } from "@storybook/react";
import { FoldableSection } from "./FoldableSection";

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
