
function StatCard({ title, value, growth }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <h2 className="text-gray-500 text-lg">
        {title}
      </h2>

      <h1 className="text-3xl font-bold mt-2">
        {value}
      </h1>

      <p className="text-green-500 mt-2">
        {growth}
      </p>
    </div>
  );
}

export default StatCard;