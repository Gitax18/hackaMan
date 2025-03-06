// Core imports
const express = require("express");
require("dotenv").config();

// Custom imports
const connectDB = require("./db/connection");
const AuthRoutes = require("./routes/route.auth");

let app = express();

app.get("/", (req, res, next) => {
  res.send("Server is started");
});

connectDB().then((res) => {
  console.log("Mongodb Connected successfully");
  app.listen(process.env.PORT, () =>
    console.log(`server listening on: http://localhost:${process.env.PORT}`)
  );
});
