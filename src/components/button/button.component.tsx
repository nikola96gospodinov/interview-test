import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
};

const Button = ({ text, ...props }: Props) => {
  return (
    <button
      {...props}
      className="rounded-2xl bg-purple-700 py-2 px-4 cursor-pointer hover:bg-white hover:text-purple-700 transition-colors block"
    >
      {text}
    </button>
  );
};

export default Button;
