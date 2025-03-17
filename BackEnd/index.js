const dotenv = require("dotenv");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes')
const adminRoutes = require('./Routes/adminRoutes')

dotenv.config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use("/api", userRoutes)
app.use('/admin', adminRoutes)

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log("connected Sucessfull", PORT);
    });
  })
  .catch((err) => {
    console.log("Error Found", err);
  });
