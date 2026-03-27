import HomePageContent from "@/components/home-page-content";
import { experiences } from "@/data/site-content";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return <HomePageContent projects={projects} experienceItems={experiences} />;
}
