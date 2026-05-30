
const analyticsData = require("../data/analyticsData");

const getAnalytics = (req, res) => {
  res.json(analyticsData());
};

module.exports = {
  getAnalytics,
};