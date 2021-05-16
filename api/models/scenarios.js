const mongoose = require("mongoose");

const { Schema } = mongoose;

const Scenario = new Schema(
  {
    ScenarioName: {
      type: String,
    },
    SavingsPerYear: {
      type: Number,
    },
    YearsToRetire: {
      type: Number,
    },
  },
  {
    collection: "Scenario",
  }
);

module.exports = mongoose.model("Scenario", Scenario);
