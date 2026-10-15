import Contact from "@/components/Contact";
import Shell from "@/components/Shell";
import { blog } from "@/data/content";

const ArticlePage = ({ slug }: { slug: string }) => {
  const article =
    blog.articles?.find((item) => item.slug === slug) ?? articles[0];
  return (
    <Shell>
      <article className="article-page">
        <img
          src={article.image}
          alt="Blog Image"
          className="article-image reveal is-visible"
        />
        <div className="article-meta reveal">
          <span>{article.date}</span>
          <span>6min read</span>
        </div>
        <h1 className="article-title reveal">{article.title}</h1>
        <p className="article-lead reveal">{article.excerpt}</p>
        {article.sections.map(([heading, body]) => (
          <section
            className="article-section reveal"
            key={heading || body.slice(0, 16)}
          >
            {heading && <h2>{heading}</h2>}
            <p>{body}</p>
          </section>
        ))}
        <Contact />
      </article>
    </Shell>
  );
};

export default ArticlePage;
