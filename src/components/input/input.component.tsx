import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from "react";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText: string;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { labelText, ...props },
  ref
) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id}>{labelText}</label>
      <input
        className="max-w-xs text-slate-950 px-2 py-1 rounded-lg"
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
});

export default Input;
