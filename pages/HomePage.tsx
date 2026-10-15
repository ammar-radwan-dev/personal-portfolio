import Contact from "@/components/Contact";
import ExperienceList from "@/components/ExperienceList";
import ProjectsList from "@/components/ProjectsList";
import Shell from "@/components/Shell";
import SplitTitle from "@/components/SplitTitle";
import StatItem from "@/components/StatItem";
import ThoughtsList from "@/components/ThoughtsList";
import ToolsGrid from "@/components/ToolsGrid";
import { header } from "@/data/content";
import { ArrowRight } from "lucide-react";
import { tools } from "@/data/content";

const HomePage = () => {
  return (
    <Shell>
      <section className="hero-section">
        <SplitTitle
          top={header.title.top}
          bottom={header.title.bottom}
          as="h1"
        />
        <p className="hero-copy reveal">{header.description}</p>
        <div className="stats reveal">
          {header.stats?.map((item) => (
            <StatItem key={item.id} value={item.value} label={item.label} />
          ))}
        </div>
        <div className="feature-grid reveal">
          {header.services?.map(({ id, icon: Icon, title, colorClass }) => (
            <div key={id} className={`feature-card ${colorClass}`}>
              <Icon />
              <strong>{title}</strong>
              <ArrowRight className="feature-arrow" />
            </div>
          ))}
        </div>
      </section>
      <ProjectsList limit={3} />
      <ExperienceList limit={3} />
      <ToolsGrid />
      <ThoughtsList limit={3} />
      <Contact />
    </Shell>
  );
};

export default HomePage;
