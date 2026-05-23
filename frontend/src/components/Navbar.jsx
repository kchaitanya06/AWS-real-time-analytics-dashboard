
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded w-full md:w-1/3"
      />

      <div className="flex items-center gap-5 text-2xl">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
}

export default Navbar;