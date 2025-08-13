import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900",
        "placeholder:text-slate-400 shadow-sm outline-none transition",
        "focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
        className
      )}
      {...props}
    />
  );
});

export default Input;
