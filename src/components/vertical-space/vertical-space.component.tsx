type Props = {
  size: "sm" | "md" | "lg";
};

const VerticalSpace = ({ size }: Props) => {
  const sizeClass = (() => {
    switch (size) {
      case "sm":
        return "h-4";
      case "md":
        return "h-8";
      case "lg":
        return "h-16";
    }
  })();

  return <div className={sizeClass} />;
};

export default VerticalSpace;
