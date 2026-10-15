import { blog } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SplitTitle from "./SplitTitle";

function ThoughtsList({ limit }: { limit?: number }) {
  return (
    <section className="content-section">
      <SplitTitle top={blog.title.top} bottom={blog.title.bottom} />
      <div className="thoughts-list">
        {blog.articles?.slice(0, limit).map((article, index) => (
          <Link
            className="thought-row reveal"
            href={`/blog/${article.slug}`}
            key={article.slug}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <div>
              <span>{article.date}</span>
              <span>6min read</span>
            </div>
            <ArrowUpRight className="row-arrow" size={22} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ThoughtsList;
