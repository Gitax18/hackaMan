const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error("Error connecting mongodb", err);
    });
}

module.exports = connectDB;
