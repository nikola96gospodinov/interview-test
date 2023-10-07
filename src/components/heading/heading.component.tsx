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
  })();

  return <h1 className={`${sizeClass} font-bold`}>{children}</h1>;
};

export default Heading;
