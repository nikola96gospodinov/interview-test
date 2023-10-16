import Heading from "@/components/heading/heading.component";
import VerticalSpace from "@/components/vertical-space/vertical-space.component";

const Instructions = () => {
  return (
    <>
      <VerticalSpace size="lg" />
      <Heading size="lg">Instructions:</Heading>
      <VerticalSpace size="sm" />
      <ol className="list-decimal list-inside text-xl tracking-wide p-8 bg-slate-800 rounded-lg border-l-4 border-slate-100">
        <li className="pb-1">
          Make sure you use the components provided.
          <ul className="list-disc list-inside ml-8 text-lg">
            <li className="py-1">
              There shouldn&apos;t be a need to use any other components but if
              you do require something that is not already included feel free to
              use JSX inline styling or Tailwind classes.
            </li>
            <li>
              You can see all 8 available components in the{" "}
              <span className="text-purple-200 underline">Storybook</span> tab
            </li>
          </ul>
        </li>
        <li className="pb-1">
          You can find the endpoints you need to use in the{" "}
          <span className="text-purple-200 underline">Endpoints</span> tab
        </li>
        <li className="pb-1">
          You can find the expected functionality in the{" "}
          <span className="text-purple-200 underline">Finished</span> tab
          <ul className="list-disc list-inside ml-8 text-lg">
            <li className="pt-1">
              Don&apos;t worry about making things pixel perfect. The components
              will take care of the styling for you.
            </li>
          </ul>
        </li>
        <li className="pb-1">
          Feel free to use any external libraries, some of the ones already
          added to the project, or none at all.
          <ul className="list-disc list-inside ml-8 text-lg">
            <li className="py-1">
              You have{" "}
              <span className="text-purple-200 underline">React Query</span> set
              up for you already for fetching data
            </li>
            <li className="pb-1">
              You have{" "}
              <span className="text-purple-200 underline">React Hook Form</span>{" "}
              added for managing forms
            </li>
            <li>
              You have <span className="text-purple-200 underline">Zod</span>{" "}
              for validation
            </li>
          </ul>
        </li>
        <li className="pb-1">
          If you need help at any point or you feel stuck don&apos;t hesitate to
          ask for help. We are here to support you!
        </li>
        <li className="text-purple-200 underline">Good luck!</li>
      </ol>
      <VerticalSpace size="md" />
      <Heading size="lg">Requirements:</Heading>
      <VerticalSpace size="sm" />
      <ol className="list-decimal list-inside text-xl tracking-wide p-8 bg-slate-800 rounded-lg border-l-4 border-slate-100">
        <li className="pb-1">
          Create a new page for displaying single tasks and the subtasks
          associated to the task in question
          <ul className="list-disc list-inside ml-8 text-lg">
            <li>
              The URL for the page should be of the form:{` `}
              <span className="text-purple-200">/tasks/{`{taskId}`}</span>
            </li>
          </ul>
        </li>
        <li className="pb-1">
          Display the title of the task at the top of the page
        </li>
        <li className="pb-1">
          Display the subtasks attached to the task inside a grid
        </li>
        <li className="pb-1">Create a form to add a new subtask</li>
        <li>
          Make sure that an added subtask is displayed in the list of subtasks
        </li>
      </ol>
      <VerticalSpace size="md" />
      <Heading size="md">Optional requirements:</Heading>
      <VerticalSpace size="sm" />
      <ol className="list-decimal list-inside text-xl tracking-wide p-8 bg-slate-800 rounded-lg border-l-4 border-slate-100">
        <li className="pb-1">Fetch as much data as possible from the server</li>
        <li className="pb-1">Validate the form data</li>
        <li className="pb-1">Include error messages in the form</li>
      </ol>
    </>
  );
};

export default Instructions;
