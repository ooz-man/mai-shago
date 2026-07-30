import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-neutral-light shadow-[0_8px_24px_rgba(11,30,51,0.25)] hover:shadow-[0_12px_32px_rgba(11,30,51,0.35)] hover:-translate-y-0.5",
        gold:
          "bg-secondary text-primary shadow-[0_8px_24px_rgba(201,162,39,0.35)] hover:shadow-[0_12px_32px_rgba(201,162,39,0.45)] hover:-translate-y-0.5",
        outline:
          "border border-current bg-transparent hover:bg-foreground/5",
        ghost: "bg-transparent hover:bg-foreground/5",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-8 text-base rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/** Standard <button>. For links, use <ButtonLink>. */
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

/** Anchor-tag counterpart so CTAs (Book Now, Explore Rooms) can be real links. */
export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
