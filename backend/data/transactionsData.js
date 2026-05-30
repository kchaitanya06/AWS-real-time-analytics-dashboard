
const transactions = () => {
  return [
    {
      customer: "Rahul",
      product: "Laptop",
      amount: `₹${Math.floor(Math.random() * 50000)}`,
      status: "Completed",
    },

    {
      customer: "Sneha",
      product: "Phone",
      amount: `₹${Math.floor(Math.random() * 30000)}`,
      status: "Pending",
    },

    {
      customer: "Arjun",
      product: "Headphones",
      amount: `₹${Math.floor(Math.random() * 10000)}`,
      status: "Completed",
    },

    {
      customer: "Priya",
      product: "Monitor",
      amount: `₹${Math.floor(Math.random() * 20000)}`,
      status: "Processing",
    },
  ];
};

module.exports = transactions;