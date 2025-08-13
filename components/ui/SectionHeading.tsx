import { HTMLAttributes } from "react";
import { cn } from "./cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={cn("max-w-2xl", alignCls, className)} {...props}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}
