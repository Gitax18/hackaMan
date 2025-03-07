const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    return mongoose.connection;
  } catch (err) {
    console.error("Error connecting mongodb", err);
  }
}

module.exports = connectDB;
