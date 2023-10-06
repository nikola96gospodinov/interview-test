import TaskCard from "@/components/task-card/task-card.component";
import Grid from "@/components/grid/grid.component";
import Heading from "@/components/heading/heading.component";
import Text from "@/components/text/text.component";
import VerticalSpace from "@/components/vertical-space/vertical-space.component";
import { API_URL } from "@/constants/api-url.constants";
import type { GetServerSideProps } from "next";

type Props = {
  tasks: Task[];
};

export default function Home({ tasks }: Props) {
  return (
    <>
      <VerticalSpace size="lg" />
      <Heading size="lg">My Tasks</Heading>
      <VerticalSpace size="sm" />
      <Text size="lg">
        Here is a full list of your tasks. You can add, remove, and edit your
        tasks.
      </Text>
      <VerticalSpace size="md" />
      <Grid cols="3">
        {tasks.map((task) => (
          <TaskCard isLink key={task.id} task={task} />
        ))}
      </Grid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchURL = new URL("/tasks", API_URL);
  const response = await fetch(fetchURL);
  const tasks = await response.json();

  return {
    props: {
      tasks,
    },
  };
};
