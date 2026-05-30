
import {
  LineChart,
  Line,
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

    <div className="bg-white p-6 rounded-xl shadow mt-8">

      <h2 className="text-3xl font-bold mb-6">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height={400}>

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
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default RevenueChart;