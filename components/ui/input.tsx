import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-2xl border border-border/70 bg-card/60 px-4 py-2 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/20 placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
