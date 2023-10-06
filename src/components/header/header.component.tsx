import Link from "next/link";
import Heading from "../heading/heading.component";
import Container from "../container/container.component";
import VerticalSpace from "../vertical-space/vertical-space.component";

export const Header = () => {
  return (
    <div className="bg-slate-800">
      <VerticalSpace size="md" />
      <Container>
        <div className="flex justify-between items-center">
          <Heading size="md">
            <span className="text-purple-400">Task </span> Manager
          </Heading>
          <Link className="underline" href="/">
            Back to homepage
          </Link>
        </div>
      </Container>
      <VerticalSpace size="md" />
    </div>
  );
};
