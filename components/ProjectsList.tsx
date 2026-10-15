import { projects } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import SplitTitle from "./SplitTitle";

const ProjectsList = ({ limit }: { limit?: number }) => {
  return (
    <section className="content-section">
      <SplitTitle top={projects.title.top} bottom={projects.title.bottom} />
      <div className="project-list">
        {projects.items?.slice(0, limit).map((project, index) => (
          <a
            className="project-row reveal"
            href={project.url}
            target="_blank"
            key={project.name}
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <img src={project.image} alt={project.name} />
            <div>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </div>
            <ArrowUpRight className="row-arrow" size={22} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
