import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button.component";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ClickMe: Story = {
  args: {
    text: "Click me!",
  },
};
