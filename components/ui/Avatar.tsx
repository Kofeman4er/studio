import Image from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "./cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  size?: number; // px
  fallback?: string; // initials
};

export default function Avatar({
  src,
  alt = "",
  size = 40,
  fallback,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn("inline-flex items-center justify-center rounded-full bg-slate-200 text-slate-700", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span className="text-sm font-semibold">{fallback?.slice(0, 2)}</span>
      )}
    </div>
  );
}
