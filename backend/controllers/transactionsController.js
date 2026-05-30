
const transactions = require("../data/transactionsData");

const getTransactions = (req, res) => {
  res.json(transactions());
};

module.exports = {
  getTransactions,
};