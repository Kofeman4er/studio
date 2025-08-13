import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, children, ...props },
  ref
) {
  return (
    <select
      ref={ref}
      className={cn(
        "w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900",
        "shadow-sm outline-none transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
        "bg-[url('data:image/svg+xml;utf8,<svg fill=%22%23677%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22><path d=%22M5.5 7l4.5 4 4.5-4%22/></svg>')] bg-[length:14px_14px] bg-no-repeat bg-[right_.65rem_center]",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

export default Select;
