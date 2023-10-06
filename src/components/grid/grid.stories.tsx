import type { Meta, StoryObj } from "@storybook/react";

import Grid from "./grid.component";
import TaskCard from "../task-card/task-card.component";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Grid",
  tags: ["autodocs"],
  argTypes: {
    cols: {
      name: "cols*",
      options: ["2", "3"],
      control: { type: "radio" },
      description: "How many columns to display",
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

type Story = StoryObj<typeof Grid>;

export const Double: Story = {
  args: {
    cols: "2",
    children: [
      <TaskCard
        key="1"
        task={{ title: "Task 1", id: "1", deadline: "05-12-2023" }}
      />,
      <TaskCard
        key="2"
        task={{ title: "Task 2", id: "2", deadline: "06-12-2023" }}
      />,
      <TaskCard
        key="3"
        task={{ title: "Task 3", id: "3", deadline: "07-12-2023" }}
      />,
    ],
  },
};

export const Triple: Story = {
  args: {
    cols: "3",
    children: [
      <TaskCard
        key="1"
        task={{ title: "Task 1", id: "1", deadline: "05-12-2023" }}
      />,
      <TaskCard
        key="2"
        task={{ title: "Task 2", id: "2", deadline: "06-12-2023" }}
      />,
      <TaskCard
        key="3"
        task={{ title: "Task 3", id: "3", deadline: "07-12-2023" }}
      />,
    ],
  },
};
