const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
app.use("/api", require("./routes"));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

module.exports = app;
