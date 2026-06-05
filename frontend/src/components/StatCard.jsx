
import {
  FaRupeeSign,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
  FaServer,
} from "react-icons/fa";

function StatCard({ title, value, growth }) {
  const getIcon = () => {
    switch (title) {
      case "Total Revenue":
        return <FaRupeeSign className="text-blue-600 text-3xl" />;
      case "Users":
        return <FaUsers className="text-green-600 text-3xl" />;
      case "Orders":
        return <FaShoppingCart className="text-purple-600 text-3xl" />;
      case "Growth":
        return <FaChartLine className="text-orange-600 text-3xl" />;
      case "API Status":
        return <FaServer className="text-emerald-600 text-3xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-500 text-lg">
          {title}
        </h2>

        {getIcon()}
      </div>

      <h1 className="text-3xl font-bold mt-4">
        {value}
      </h1>

      <p className="text-green-500 mt-3 font-semibold">
        {growth}
      </p>
    </div>
  );
}

export default StatCard;