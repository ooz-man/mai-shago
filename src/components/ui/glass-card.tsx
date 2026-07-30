import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Base glass surface reused by feature cards, nav, floating panels. */
export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(11,30,51,0.12)]",
        className
      )}
      {...props}
    />
  );
}
