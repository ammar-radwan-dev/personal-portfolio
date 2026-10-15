import PageWrapper from "@/components/PageWrapper";
import ProjectsList from "@/components/ProjectsList";

const ProjectsPage = () => {
  return (
    <PageWrapper
      title={{
        top: "RECENT",
        bottom: "PROJECTS",
      }}
    >
      <ProjectsList />
    </PageWrapper>
  );
};

export default ProjectsPage;
