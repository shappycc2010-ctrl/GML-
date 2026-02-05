require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

/* Connect DB */
connectDB();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/plans", require("./routes/plans"));

/* Test Route */
app.get("/", (req, res) => {
  res.json({
    message: "GML Backend Running Successfully 🚀"
  });
});

/* PORT (Render compatible) */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
