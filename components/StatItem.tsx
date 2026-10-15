const StatItem = ({
  value,
  label,
}: {
  value: string;
  label: { top: string; down: string };
}) => (
  <div className="stat-item">
    <strong>{value}</strong>
    <span>
      {label.top}
      <br />
      {label.down}
    </span>
  </div>
);

export default StatItem;
