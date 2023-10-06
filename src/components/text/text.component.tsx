import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  size: "sm" | "md" | "lg";
}>;

const Text = ({ children, size }: Props) => {
  const sizeClass = (() => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-lg";
    }

    return "text-base"; // default value. This should never happen.
  })();

  return <p className={sizeClass}>{children}</p>;
};

export default Text;
