
const express = require("express");
const cors = require("cors");

const analyticsRoutes = require("./routes/analyticsRoutes");
const transactionsRoutes = require("./routes/transactionsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.use("/api/analytics", analyticsRoutes);

app.use("/api/transactions", transactionsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});