import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [totalEquipments, setTotalEquipments] = useState(0);
  const [myListings, setMyListings] = useState(0);
  const [chartData, setChartData] = useState({
    labels: ["Loading..."],
    datasets: [
      {
        label: "Equipments by Category",
        data: [0],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  // Fetch total equipments count
  useEffect(() => {
    fetch("https://equi-sports-server-murex.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => setTotalEquipments(data.length))
      .catch((err) => console.error(err));
  }, []);

  // Fetch logged-in user's equipment count
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://equi-sports-server-murex.vercel.app/equipmentEmail/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyListings(data.length))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Fetch equipment data to generate chart (Equipments by category or other metric)
  useEffect(() => {
    fetch("https://equi-sports-server-murex.vercel.app/equipments")
      .then((res) => res.json())
      .then((data) => {
        // Assuming you want to categorize by category
        const categories = data.reduce((acc, item) => {
          acc[item.category] = (acc[item.category] || 0) + 1;
          return acc;
        }, {});

        const chartLabels = Object.keys(categories);
        const chartValues = Object.values(categories);

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: "Equipments by Category",
              data: chartValues,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📊 Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-200 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold">Total Equipments</h3>
          <p className="text-3xl mt-2">{totalEquipments}</p>
        </div>
        <div className="bg-green-300 p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-semibold">My Listings</h3>
          <p className="text-3xl mt-2">{myListings}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Equipments by Category</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default DashboardOverview;
