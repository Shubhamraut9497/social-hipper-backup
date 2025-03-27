"use client"
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // For shading under the curve
  TooltipItem,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// Sample chart data
const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Engagement",
      data: [30, 50, 40, 60, 80, 70, 90],
      backgroundColor: "rgba(255, 99, 132, 0.2)", // Light red fill under the line
      borderColor: "rgba(255, 99, 132, 1)", // Line color
      borderWidth: 2,
      tension: 0.4, // Smooth the curve
      fill: true, // Fill area under the curve
      pointRadius: 5, // Size of data points
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { beginAtZero: true },
  },
  plugins: {
    legend: { display: false }, // Hide legend if not needed
    tooltip: {
      enabled: true,
      callbacks: {
        label: (context: TooltipItem<'line'>) => `${context.raw}%`,
      },
      backgroundColor: "#2c2c2c", // Tooltip background color
      titleFont: { size: 14 },
      bodyFont: { size: 12 },
      padding: 10,
      cornerRadius: 4,
    },
  },
};

const statsData = [
  { title: "Followers", data: chartData },
  { title: "Following", data: chartData },
  { title: "Engagement Rate", data: chartData },
  { title: "Engagement", data: chartData },
  { title: "Income Stats", data: chartData },
  { title: "Income Stats", data: chartData },
];

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 md:mx-20  mt-8">
      {statsData.map((stat, index) => (
        <Card key={index} className="bg-white rounded-lg shadow-lg dark:bg-[#2E2B2B]">
          <CardHeader className="flex justify-between items-center p-4 border-b">
            <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
            <div className="text-sm text-gray-500">Weekly</div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="relative h-40">
              <Line data={stat.data} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
