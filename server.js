const express = require("express");
const mongoose = require("mongoose");
const {router} = require("./src/routes/weatherDataRoute");

const app = express();
app.use(express.json());


app.use('/api/v1/weather/',router);

require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
