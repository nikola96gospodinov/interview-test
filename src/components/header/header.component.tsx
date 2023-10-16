import Link from "next/link";
import Heading from "../heading/heading.component";
import Container from "../container/container.component";
import VerticalSpace from "../vertical-space/vertical-space.component";
import { isLocalEnv } from "../../constants";

export const Header = () => {
  return (
    <div className="bg-slate-800">
      <VerticalSpace size="md" />
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Heading size="md">
              <span className="text-purple-400">Task </span> Manager{" "}
              {!isLocalEnv && "(FINISHED)"}
            </Heading>
          </Link>
          <div className="flex gap-4">
            <Link className="underline" href="/">
              Homepage
            </Link>
            {isLocalEnv && (
              <>
                <a
                  className="underline"
                  href="http://localhost:6006"
                  target="_blank"
                >
                  Storybook
                </a>
                <Link className="underline" href="/endpoints">
                  Endpoints
                </Link>
                <Link className="underline" href="/instructions">
                  Instructions
                </Link>
                <a
                  className="underline"
                  href="https://interview-test-mu.vercel.app/"
                  target="_blank"
                >
                  Finished
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
      <VerticalSpace size="md" />
    </div>
  );
};
