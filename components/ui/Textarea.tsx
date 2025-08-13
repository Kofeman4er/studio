import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { className, rows = 4, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
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

export default Textarea;
