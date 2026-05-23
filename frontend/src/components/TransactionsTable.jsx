
const transactions = [
  {
    customer: "Rahul",
    product: "Laptop",
    amount: "₹45,000",
    status: "Completed",
  },
  {
    customer: "Sneha",
    product: "Phone",
    amount: "₹25,000",
    status: "Pending",
  },
  {
    customer: "Arjun",
    product: "Headphones",
    amount: "₹5,000",
    status: "Completed",
  },
  {
    customer: "Priya",
    product: "Monitor",
    amount: "₹12,000",
    status: "Processing",
  },
];

function TransactionsTable() {
  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3">Customer</th>
              <th className="p-3">Product</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{item.customer}</td>
                <td className="p-3">{item.product}</td>
                <td className="p-3">{item.amount}</td>
                <td className="p-3">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsTable;