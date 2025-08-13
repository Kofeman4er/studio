"use client";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: false;
  href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: true;
  href: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

type Props = BaseProps | LinkProps;

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
};

const variants = {
  primary:
    "bg-sky-500 text-white hover:brightness-95 border border-transparent",
  secondary:
    "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent",
};

export default function Button({
  variant = "primary",
  size = "md",
  asChild,
  href,
  className,
  children,
  ...props
}: Props) {
  const cls = cn(
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
    sizes[size],
    variants[variant],
    className
  );

  if (asChild && href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
