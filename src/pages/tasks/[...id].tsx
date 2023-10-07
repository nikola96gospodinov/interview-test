import Heading from "@/components/heading/heading.component";
import type { GetServerSideProps } from "next";
import { API_URL } from "@/constants/api-url.constants";
import Grid from "@/components/grid/grid.component";
import TaskCard from "@/components/task-card/task-card.component";
import Button from "@/components/button/button.component";
import { useMutation, useQuery } from "@tanstack/react-query";
import VerticalSpace from "@/components/vertical-space/vertical-space.component";
import Input from "@/components/input/input.component";
import Form from "@/components/form/form.component";
import { useForm } from "react-hook-form";
import queryClient from "@/lib/react-query";
import { formatDate } from "@/utils/dates.utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type Props = {
  task: Task;
};

const InputSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  deadline: z.string().nonempty({ message: "Deadline is required" }),
});

type Inputs = z.infer<typeof InputSchema>;

export default function Task({ task }: Props) {
  const { data: subtasks } = useQuery<SubTask[]>({
    queryKey: ["subtasks", task.id],
    queryFn: async () => {
      const fetchURL = new URL(`/subtasks?taskId=${task.id}`, API_URL);
      const response = await fetch(fetchURL);
      const subtasks = await response.json();
      return subtasks;
    },
  });

  const { mutate: addSubtask, isLoading: isAddingSubtask } = useMutation({
    mutationFn: async ({ title, deadline }: Inputs) => {
      const fetchURL = new URL("/subtasks", API_URL);
      await fetch(fetchURL, {
        method: "POST",
        body: JSON.stringify({
          title,
          deadline,
          taskId: task.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subtasks", task.id] });
      reset();
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      deadline: "",
    },
    resolver: zodResolver(InputSchema),
  });

  const onSubmit = (data: Inputs) => {
    addSubtask({
      ...data,
      deadline: formatDate(data.deadline),
    });
  };

  return (
    <>
      <VerticalSpace size="lg" />
      <Heading size="lg">{task.title}</Heading>
      <VerticalSpace size="md" />
      <Grid cols="2">
        {subtasks?.map((subtask) => (
          <TaskCard key={subtask.id} task={subtask} />
        ))}
      </Grid>
      <VerticalSpace size="lg" />
      <Heading size="md">Add a new subtask</Heading>
      <VerticalSpace size="sm" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelText="Title"
          errorMessage={errors?.title?.message}
          type="text"
          {...register("title", { required: true })}
        />
        <Input
          labelText="Deadline"
          errorMessage={errors?.deadline?.message}
          type="date"
          {...register("deadline", { required: true })}
        />
        <VerticalSpace size="sm" />
        <Button text="Submit" type="submit" disabled={isAddingSubtask} />
      </Form>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const fetchURL = new URL(`/tasks/${id}`, API_URL);
  const response = await fetch(fetchURL);
  const task = await response.json();

  return {
    props: {
      task,
    },
  };
};
