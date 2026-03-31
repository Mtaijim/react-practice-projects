import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
function CategoryPieChart({ expenses }) {
  const COLORS = ["#3182ce", "#38a169", "#d69e2e", "#e53e3e"];
  const data = Object.values(
    expenses.reduce((acc, curr) => {
      acc[curr.category] = acc[curr.category] || {
        name: curr.category,
        value: 0,
      };
      acc[curr.category].value += curr.amount;
      return acc;
    }, {}),
  );
  if (data.length === 0) return null;
  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
export default CategoryPieChart;
