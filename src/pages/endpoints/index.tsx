import Heading from "@/components/heading/heading.component";
import VerticalSpace from "@/components/vertical-space/vertical-space.component";
import Text from "@/components/text/text.component";

type Parameter = {
  name: string;
  type: string;
  required: boolean;
  in: string;
  description: string;
  example: string;
};

type RequestBodyItem = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example: string;
};

type Endpoint = {
  method: "GET" | "POST";
  path: string;
  description: string;
  parameters?: Parameter[];
  requestBodyItems?: RequestBodyItem[];
};

const tasksEndpoints: Endpoint[] = [
  {
    method: "GET",
    path: "/tasks/{taskId}",
    description:
      "Returns the task with the given taskId. You can find the type definition for a task in src/types/task.type.ts",
  },
];

const subTasksEndpoints: Endpoint[] = [
  {
    method: "GET",
    path: "/subtasks",
    description:
      "Returns all subtasks for the task with the given taskId. You can find the type definition for a task in src/types/task.type.ts",
    parameters: [
      {
        name: "taskId",
        type: "string",
        required: true,
        in: "query params",
        description: "The id of the parent task",
        example: "52e4a3b4-f662-4d21-a9ca-3a6c7372c530",
      },
    ],
  },
  {
    method: "POST",
    path: "/subtasks",
    description: "Adds a new subtask",
    parameters: [
      {
        name: "Content-Type",
        type: "application/json",
        required: true,
        in: "header",
        description:
          "The only supported format for the request body is 'application/json'",
        example: "application/json",
      },
    ],
    requestBodyItems: [
      {
        name: "title",
        type: "string",
        required: true,
        description: "The title of the subtask",
        example: "Set up interview",
      },
      {
        name: "deadline",
        type: "string",
        required: true,
        description: "The deadline of the subtask",
        example: "03/03/2023",
      },
      {
        name: "taskId",
        type: "string",
        required: true,
        description: "The id of the parent task",
        example: "52e4a3b4-f662-4d21-a9ca-3a6c7372c530",
      },
    ],
  },
];

const Endpoints = () => {
  return (
    <>
      <VerticalSpace size="lg" />
      <Heading size="lg">Endpoints</Heading>
      <VerticalSpace size="sm" />
      <Text size="lg">
        Here you can find all the endpoints necessary to complete your
        interview.
      </Text>
      <VerticalSpace size="md" />
      <div>
        <Text size="lg">
          Base URL:{" "}
          <span className="text-purple-200">http://localhost:3004</span>
        </Text>
        <Text size="lg">
          You can find the base URL as a constant in{" "}
          <span className="text-purple-200">
            src/constants/api-url.constants.ts
          </span>
        </Text>
      </div>
      <VerticalSpace size="lg" />
      <Heading size="lg">Tasks</Heading>
      <VerticalSpace size="sm" />
      {tasksEndpoints.map((endpoint) => (
        <Endpoint key={endpoint.path + endpoint.method} endpoint={endpoint} />
      ))}

      <VerticalSpace size="sm" />
      <Heading size="lg">Subtasks</Heading>
      <VerticalSpace size="sm" />
      {subTasksEndpoints.map((endpoint) => (
        <Endpoint key={endpoint.path + endpoint.method} endpoint={endpoint} />
      ))}
    </>
  );
};

export default Endpoints;

const Endpoint = ({ endpoint }: { endpoint: Endpoint }) => {
  const bgColor = endpoint.method === "GET" ? "bg-blue-900" : "bg-green-900";
  const textColor =
    endpoint.method === "GET" ? "text-blue-100" : "text-green-100";

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-6">
      <Heading size="md">
        <div
          className={`${textColor} mr-2 inline-block ${bgColor} px-3 py-1 rounded-lg`}
        >
          {endpoint.method}
        </div>{" "}
        <span className="font-thin tracking-wider py-1">{endpoint.path}</span>
      </Heading>
      <VerticalSpace size="sm" />
      <Text size="lg">{endpoint.description}</Text>
      {endpoint.parameters && (
        <>
          <VerticalSpace size="md" />
          <Heading size="sm">
            <span>Parameters:</span>
          </Heading>
          <VerticalSpace size="sm" />
          {endpoint.parameters.map((parameter) => (
            <div key={parameter.name} className="flex gap-10">
              <div className="flex flex-col basis-32">
                <Text size="lg">
                  {parameter.name}
                  {parameter.required && (
                    <span className="text-red-500">*</span>
                  )}
                </Text>
                <Text size="sm">
                  <span className="text-slate-300">{parameter.type}</span>
                </Text>
                <Text size="md">({parameter.in})</Text>
              </div>
              <div>
                <Text size="md">{parameter.description}</Text>
                <Text size="lg">
                  Example:{" "}
                  <span className="text-purple-200">{parameter.example}</span>
                </Text>
              </div>
            </div>
          ))}
        </>
      )}
      {endpoint.requestBodyItems && (
        <>
          <VerticalSpace size="md" />
          <Heading size="sm">
            <span>Request Body:</span>
          </Heading>
          <VerticalSpace size="sm" />
          {endpoint.requestBodyItems.map((requestBodyItem, index) => (
            <div
              key={requestBodyItem.name}
              className={`flex gap-10 ${
                index === endpoint.requestBodyItems!.length - 1 ? "" : "mb-4"
              }`}
            >
              <div className="flex flex-col basis-32">
                <Text size="lg">
                  {requestBodyItem.name}
                  {requestBodyItem.required && (
                    <span className="text-red-500">*</span>
                  )}
                </Text>
                <Text size="sm">
                  <span className="text-slate-300">{requestBodyItem.type}</span>
                </Text>
              </div>
              <div>
                <Text size="md">{requestBodyItem.description}</Text>
                <Text size="lg">
                  Example:{" "}
                  <span className="text-purple-200">
                    {requestBodyItem.example}
                  </span>
                </Text>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
