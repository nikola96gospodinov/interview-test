import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

type Props = PropsWithChildren &
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const Form = ({ children, ...props }: Props) => {
  return (
    <form
      className="bg-slate-800 p-8 rounded-lg border-l-4 border-slate-300"
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
