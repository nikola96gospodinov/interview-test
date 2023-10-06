import Link from "next/link";
import VerticalSpace from "../vertical-space/vertical-space.component";
import Heading from "../heading/heading.component";
import Text from "../text/text.component";

type Props = {
  task: Task | SubTask;
  isLink?: boolean;
};

const TaskCard = ({ task, isLink }: Props) => {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 w-full h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Heading size="md">{task.title}</Heading>
          <VerticalSpace size="sm" />
          <Text size="md">
            Deadline: <b className="text-purple-200">{task.deadline}</b>
          </Text>
          {isLink && <VerticalSpace size="sm" />}
        </div>
        {isLink && (
          <Link className="underline" href={`/tasks/${task.id}`}>
            See more
          </Link>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
