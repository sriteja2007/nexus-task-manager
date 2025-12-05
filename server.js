const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // <-- Load .env file

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const taskRoutes = require("./backend/routes/taskRoutes");
app.use("/tasks", taskRoutes);

// Connect to MongoDB using .env variable
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
