import type { Meta, StoryObj } from "@storybook/react";

import TaskCard from "./task-card.component";

const meta: Meta<typeof TaskCard> = {
  component: TaskCard,
  title: "Task Card",
  tags: ["autodocs"],
  argTypes: {
    task: {
      description:
        "`Task` or `SubTask` (you can find those types in `src/types/task.types.ts`)",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TaskCard>;

export const WithLink: Story = {
  args: {
    task: {
      id: "1",
      title: "Task 1",
      deadline: "02/02/2021",
    },
    isLink: true,
  },
};

export const WithoutLink: Story = {
  args: {
    task: {
      id: "1",
      title: "Task 1",
      deadline: "02/02/2021",
    },
  },
};
