import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  size: "sm" | "md" | "lg";
}>;

const Heading = ({ children, size }: Props) => {
  const sizeClass = (() => {
    switch (size) {
      case "sm":
        return "text-xl";
      case "md":
        return "text-2xl";
      case "lg":
        return "text-4xl";
    }

    return "text-2xl"; // default value. This should never happen.
  })();

  const className = clsx(sizeClass, "font-bold");

  return <h1 className={className}>{children}</h1>;
};

export default Heading;
