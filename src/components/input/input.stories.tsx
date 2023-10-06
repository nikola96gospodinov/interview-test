import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input.component";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
  argTypes: {
    labelText: {
      name: "labelText*",
      description: "`string`",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    labelText: "Emial",
  },
};
