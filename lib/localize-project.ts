import type { TranslationKey } from "@/lib/translations";
import type { Project } from "@/types/project";

type Translate = (key: TranslationKey) => string;

export function localizeProject(project: Project, t: Translate): Project {
  switch (project.id) {
    case "fullstack-university-project":
      return {
        ...project,
        title: t("project_event_planner_title"),
        summary: t("project_event_planner_summary"),
        highlights: [
          t("project_event_planner_highlight_one"),
          t("project_event_planner_highlight_two"),
          t("project_event_planner_highlight_three"),
          t("project_event_planner_highlight_four"),
        ],
      };
    case "ai-dashboard":
      return {
        ...project,
        title: t("project_student_overview_title"),
        summary: t("project_student_overview_summary"),
        highlights: [
          t("project_student_overview_highlight_one"),
          t("project_student_overview_highlight_two"),
          t("project_student_overview_highlight_three"),
          t("project_student_overview_highlight_four"),
        ],
      };
    default:
      return project;
  }
}
