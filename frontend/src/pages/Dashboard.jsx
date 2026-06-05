
import { useEffect, useState } from "react";
import axios from "axios";

import TransactionsTable from "../components/TransactionsTable";
import RevenueChart from "../charts/RevenueChart";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {

  const [analytics, setAnalytics] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {

    fetchAnalytics();

    const interval = setInterval(() => {
      fetchAnalytics();
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const fetchAnalytics = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/analytics`
      );

      setAnalytics(response.data);

      setLoading(false);

    } catch (error) {
      console.log(error);
      setError("Failed to fetch analytics data");
    }
  };

  if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h1 className="text-2xl font-bold mt-6">
        Loading Dashboard...
      </h1>
    </div>
  );
}

if (error) {
  return (
    <div className="flex justify-center items-center min-h-screen text-red-500 text-2xl font-bold">
      {error}
    </div>
  );

}


  return (

    <div className="flex-1 p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 min-h-screen">
      <Navbar />

      <div className="mt-6">

        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          AWS Real-Time Analytics Dashboard
        </h1>

        <div className="flex items-center gap-3 mt-2">

        <p className="text-gray-600">
          Real-time business intelligence powered by modern cloud architecture.
        </p>

  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>

    Live

  </div>

</div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">

        <StatCard
          title="Total Revenue"
          value={analytics.revenue}
          growth="+12%"
        />

        <StatCard
          title="Users"
          value={analytics.users}
          growth="+8%"
        />

        <StatCard
          title="Orders"
          value={analytics.orders}
          growth="+15%"
        />

        <StatCard
          title="Growth"
          value={analytics.growth}
          growth="+5%"
        />

        <StatCard
          title="Cloud Health"
          value="99.9%"
          growth="Healthy"
        />


      </div>
      <RevenueChart />

<TransactionsTable />

<footer className="mt-10 text-center text-gray-500 text-sm">
  Built with React, Node.js, Express & AWS Architecture Concepts
</footer>

</div>

     
  );
}

export default Dashboard;