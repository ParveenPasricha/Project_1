const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const adminRoutes = require("./Routes/adminRoutes");

dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api", userRoutes);
app.use("/admin", adminRoutes);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });
  })
  .catch((err) => console.log("Database connection error:", err));
