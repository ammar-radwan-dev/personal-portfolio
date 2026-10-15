import PageWrapper from "@/components/PageWrapper";
import ThoughtsList from "@/components/ThoughtsList";
import { blog } from "@/data/content";

const BlogPage = () => {
  return (
    <PageWrapper>
      <ThoughtsList />
    </PageWrapper>
  );
};

export default BlogPage;
