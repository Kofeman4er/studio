import { HTMLAttributes } from "react";
import { cn } from "./cn";

export default function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("container mx-auto px-4", className)}
      {...props}
    />
  );
}
