import type { Meta, StoryObj } from "@storybook/react";

import Text from "./text.component";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      description: "Size of text",
      name: "size*",
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

type Story = StoryObj<typeof Text>;

export const Small: Story = {
  args: {
    children: "Small text",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium text",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large text",
    size: "lg",
  },
};
