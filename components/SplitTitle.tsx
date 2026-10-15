const SplitTitle = ({
  top,
  bottom,
  as = "h2",
}: {
  top: string;
  bottom: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  return (
    <Tag className="split-title reveal">
      <span>{top}</span>
      <span>{bottom}</span>
    </Tag>
  );
};

export default SplitTitle;
