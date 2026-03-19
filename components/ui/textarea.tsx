import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[140px] w-full rounded-2xl border border-border/70 bg-card/60 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-accent/60 focus-visible:ring-2 focus-visible:ring-accent/20 placeholder:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
