import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashboardChart({ newCount, contactedCount, completedCount }) {
  const data = {
    labels: ["New", "Contacted", "Completed"],
    datasets: [
      {
        data: [newCount, contactedCount, completedCount],
        backgroundColor: [
          "#3B82F6",
          "#F59E0B",
          "#10B981",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        background: "#111827",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "30px",
      }}
    >
      <h3 style={{ color: "#fff" }}>Enquiry Analytics</h3>

      <Pie data={data} />
    </div>
  );
}

export default DashboardChart;