import { experiences } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import SplitTitle from "./SplitTitle";

const ExperienceList = ({ limit }: { limit?: number }) => {
  return (
    <section className="content-section">
      <SplitTitle
        top={experiences.title.top}
        bottom={experiences.title.bottom}
      />
      <div className="experience-list">
        {experiences.items?.slice(0, limit).map((item, index) => (
          <a
            className="experience-row reveal"
            href="#"
            key={item.company}
            style={{ transitionDelay: `${index * 55}ms` }}
          >
            <div>
              <h3>{item.company}</h3>
              <p>{item.description}</p>
              <span>{item.date}</span>
            </div>
            <ArrowUpRight className="row-arrow" size={22} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
