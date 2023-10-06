import type { Meta, StoryObj } from "@storybook/react";

import Form from "./form.component";
import Input from "../input/input.component";
import Button from "../button/button.component";
import VerticalSpace from "../vertical-space/vertical-space.component";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Form",
  tags: ["autodocs"],
  argTypes: {
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

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
    children: [
      <Input key="1" labelText="Name" />,
      <Input key="2" labelText="Email" type="email" />,
      <VerticalSpace key="3" size="sm" />,
      <Button key="4" text="Submit" />,
    ],
  },
};
