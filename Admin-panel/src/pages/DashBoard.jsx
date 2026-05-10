import StatsCard from "../components/StatsCard";

const DashBoard = () => {
  return (
    <div className="p-6 grid grid-cols-4 gap-4">
      <StatsCard title="Views" value="50k" />
      <StatsCard title="Subscribers" value="10k" />
      <StatsCard title="videos" value="500" />
      <StatsCard title="Comments" value="1k" />
    </div>
  );
};

export default DashBoard;
