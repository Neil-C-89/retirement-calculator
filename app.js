/*

  There are some minor modifications to the default Express setup
  Each is commented and marked with [SH] to make them easy to find

 */

const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
// [SH] Require Passport
const passport = require("passport");
const mongoose = require("mongoose");

const scenarioRoute = require("./api/routes/scenario.route");

mongoose.Promise = global.Promise;

// [SH] Bring in the data model
require("./api/models/db");
// [SH] Bring in the Passport config after model is defined
require("./api/config/passport");

// [SH] Bring in the routes for the API (delete the default routes)
const routesApi = require("./api/routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/scenarios", scenarioRoute);

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// [SH] Use the API routes when path starts with /api
app.use("/api", routesApi);
const port = 4000;

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use((err, _req, res) => {
  if (err.name === "UnauthorizedError") {
    res.status(401);
    res.json({ message: `${err.name}: ${err.message}` });
  }
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use((err, _req, res) => {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, _req, res) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
