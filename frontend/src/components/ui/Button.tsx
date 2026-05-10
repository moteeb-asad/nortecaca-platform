import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/src/lib/cn";

type ButtonVariant = "default" | "overlay";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export default function Button({
  href,
  children,
  className,
  variant = "default",
}: ButtonProps) {
  const baseClasses =
    "inline-flex w-fit items-center justify-center rounded-md border border-accent bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors sm:px-8 sm:py-3 sm:text-base lg:px-10 lg:py-[10px]";

  const variantClasses =
    variant === "overlay"
      ? "hover:border-white hover:bg-white hover:text-accent"
      : "hover:border-accent hover:bg-white hover:text-accent";

  return (
    <Link href={href} className={cn(baseClasses, variantClasses, className)}>
      {children}
    </Link>
  );
}
