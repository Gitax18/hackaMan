let express = require("express");
require("dotenv").config();

let app = express();

app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT, () =>
  console.log(`server listening on: http://localhost:${process.env.PORT}`)
);
