import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from "react";
import Text from "../text/text.component";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  labelText: string;
  errorMessage?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { labelText, errorMessage, ...props },
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
      {errorMessage && (
        <Text size="sm">
          <span className="text-red-500 block mt-1">{errorMessage}</span>
        </Text>
      )}
    </div>
  );
});

export default Input;
