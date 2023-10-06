import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./heading.component";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Heading",
  tags: ["autodocs"],
  argTypes: {
    size: {
      name: "size*",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      description: "Size of heading",
    },
    children: {
      description: "React `children`",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Small: Story = {
  args: {
    children: "Small heading",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium heading",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large heading",
    size: "lg",
  },
};
