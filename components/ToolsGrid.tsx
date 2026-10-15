import { tools } from "@/data/content";
import SplitTitle from "./SplitTitle";

const ToolsGrid = () => {
  return (
    <section className="content-section">
      <SplitTitle top={tools.title.top} bottom={tools.title.bottom} />

      <div className="tools-grid">
        {tools.items?.map((tool, index) => (
          <a
            className="tool-item reveal"
            href="#"
            key={tool.name}
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            <img src={tool.image} alt="" />
            <div>
              <h3>{tool.name}</h3>
              <p>{tool.type}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;
