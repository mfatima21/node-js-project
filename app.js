const Movie = require("./models/movie.model")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const index= require('./routes/index.routes');
const { query } = require("express");
const jwt = require('jsonwebtoken');
const { failureResponse } = require("./services/response.service");

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION).then(
  async () => {
    console.log("connected to database" + process.env.DB_CONNECTION );
  },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
});

app.use(express.json());
app.use('/', index)

app.use(function (err, req, res, next) {
  const errorArray = [];
  const length = err.details ? err.details.body.length : 0;
  if (length > 0) {
    for (let i = 0; i < err.details.body.length; i++) {
      errorArray[i] = err.details.body[i].message;
    }
    failureResponse(req, res, {error: errorArray}, 400)
  } else {
    failureResponse(req, res, {error: err}, 400)
  }
});

app.listen(process.env.PORT, () => {
  console.log("App is running at http://localhost:%d", process.env.PORT);
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
