import { FolderOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsEmptyState() {
  return (
    <Card className="border-dashed border-white/10 bg-white/5">
      <CardContent className="flex flex-col items-center gap-4 py-14 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FolderOpen className="size-6" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Projects coming soon</h3>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Add new entries in the local project data file whenever you want to publish more work.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
