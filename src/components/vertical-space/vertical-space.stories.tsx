import type { Meta, StoryObj } from "@storybook/react";

import VerticalSpace from "./vertical-space.component";

const meta: Meta<typeof VerticalSpace> = {
  component: VerticalSpace,
  title: "Vertical Space",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      description: "Size of vertical space",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof VerticalSpace>;

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
