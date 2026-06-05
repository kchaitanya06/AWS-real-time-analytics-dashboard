
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 9000 },
];

function RevenueChart() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mt-8 border border-gray-100 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-3xl font-bold">
            Revenue Overview
          </h2>

          <p className="text-gray-500 mt-1">
            Monthly revenue performance analytics
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Last 6 Months
        </div>

      </div>

      <ResponsiveContainer width="100%" height={420}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

              <stop
                offset="5%"
                stopColor="#2563eb"
                stopOpacity={0.8}
              />

              <stop
                offset="95%"
                stopColor="#2563eb"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;