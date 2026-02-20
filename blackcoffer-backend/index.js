const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/blackcoffer")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// Import model
const Insight = require("./models/Insight");

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// API to get all insights
app.get("/api/insights", async (req, res) => {
  try {
    const insights = await Insight.find();
    res.json(insights);
  } catch (error) {
    res.status(500).json({ message: "Error fetching insights" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
