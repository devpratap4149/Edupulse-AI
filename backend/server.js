const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Database connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/sos", require("./routes/sosRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/interventions", require("./routes/interventionRoutes"));
app.use("/api/heatmap", require("./routes/heatmapRoutes"));
app.use("/api/alerts", require("./routes/alertRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("EduPulse AI Backend is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});