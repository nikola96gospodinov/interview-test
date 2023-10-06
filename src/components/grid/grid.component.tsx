import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  cols: "2" | "3" | "4";
}>;

const Grid = ({ children, cols }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridGap: "24px",
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
