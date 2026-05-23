
import { FaChartBar, FaUsers, FaCog, FaFileAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-full md:w-64 min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Analytics
      </h1>

      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaChartBar />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaUsers />
          Users
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaFileAlt />
          Reports
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaCog />
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;