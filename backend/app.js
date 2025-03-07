// Core imports
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// Custom imports
const connectDB = require("./db/connection");
const AuthRoutes = require("./routes/route.auth");
const UtilRoutes = require("./routes/route.utils");

let app = express();
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Server is started");
});

// middlewares
app.use(bodyParser.json());
app.use("/auth", AuthRoutes);
app.use("/util", UtilRoutes);

connectDB().then((res) => {
  console.log("Mongodb Connected successfully...");
  app.listen(process.env.PORT, () =>
    console.log(`server listening on: http://localhost:${process.env.PORT}`)
  );
});
