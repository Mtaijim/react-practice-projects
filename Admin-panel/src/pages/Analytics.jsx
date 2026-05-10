import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Analytics = () => {
  const data = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],

    datasets: [
      {
        label: "Views",
        data: [1200, 1900, 800, 2400, 1700, 3000, 2100],
        backgroundColor: "rgba(255,0,0,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Weekly Channel Views",
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Channel Analytics</h1>

      <Bar data={data} options={options} />
    </div>
  );
};

export default Analytics;
