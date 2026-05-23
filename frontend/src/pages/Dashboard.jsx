import TransactionsTable from "../components/TransactionsTable";
import RevenueChart from "../charts/RevenueChart";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <Navbar />

      <div className="mt-6">
        <h1 className="text-3xl font-bold">
          Cloud Analytics Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Welcome to AWS Analytics Dashboard
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

        <StatCard
          title="Total Revenue"
          value="₹1,24,000"
          growth="+12%"
        />

        <StatCard
          title="Users"
          value="8,450"
          growth="+8%"
        />

        <StatCard
          title="Orders"
          value="1,230"
          growth="+15%"
        />

        <StatCard
          title="Growth"
          value="24%"
          growth="+5%"
        />

      </div>
      <RevenueChart />
      <TransactionsTable />
    </div>
  );
}

export default Dashboard;