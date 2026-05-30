
const analyticsData = () => {
  return {
    revenue: `₹${Math.floor(Math.random() * 100000 + 50000)}`,
    users: Math.floor(Math.random() * 10000),
    orders: Math.floor(Math.random() * 5000),
    growth: `${Math.floor(Math.random() * 100)}%`,
  };
};

module.exports = analyticsData;