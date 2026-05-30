
import { useEffect, useState } from "react";
import axios from "axios";

function TransactionsTable() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {

    fetchTransactions();

    const interval = setInterval(() => {
      fetchTransactions();
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const fetchTransactions = async () => {

    try {

      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/transactions`
      );

      setTransactions(response.data);

    } catch (error) {
      console.log(error);
    }
  };

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

              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition duration-200"
              >

                <td className="p-3">
                  {item.customer}
                </td>

                <td className="p-3">
                  {item.product}
                </td>

                <td className="p-3">
                  {item.amount}
                </td>

                <td className="p-3">

  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${
      item.status === "Completed"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }`}
  >
    {item.status}
  </span>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TransactionsTable;