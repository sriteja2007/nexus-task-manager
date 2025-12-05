const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// routes
const taskRoutes = require("./backend/routes/taskRoutes");
app.use("/tasks", taskRoutes);

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://sriteja_15:SriTeja%402007@cluster0.fw2kd8s.mongodb.net/nexus?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));
