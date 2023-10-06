type Task = {
  id: string;
  title: string;
  deadline: string;
};

type SubTask = Task & {
  taskId: string;
};
