import PageWrapper from "@/components/PageWrapper";
import ToolsGrid from "@/components/ToolsGrid";
import { tools } from "@/data/content";

const ToolsPage = () => {
  console.log(tools.items);
  return (
    <PageWrapper>
      <ToolsGrid />
    </PageWrapper>
  );
};

export default ToolsPage;
