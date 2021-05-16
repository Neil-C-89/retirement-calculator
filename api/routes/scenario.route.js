const express = require("express");

const app = express();
const scenarioRoutes = express.Router();

// Require Product model in our routes module
const Scenario = require("../models/scenarios");

// Defined store route
scenarioRoutes.route("/add").post((req, res) => {
  const scenario = new Scenario(req.body);
  console.log(scenario);
  scenario
    .save()
    .then((scenario) => {
      res
        .status(200)
        .json({ Scenario: "Scenario has been added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
scenarioRoutes.route("/").get((req, res) => {
  Scenario.find((err, scenarios) => {
    if (err) {
      console.log(err);
    } else {
      res.json(scenarios);
    }
  });
});

// Defined edit route
scenarioRoutes.route("/edit/:id").get((req, res) => {
  const { id } = req.params;
  Scenario.findById(id, (err, scenario) => {
    res.json(scenario);
  });
});

//  Defined update route
scenarioRoutes.route("/update/:id").post((req, res) => {
  Scenario.findById(req.params.id, (err, scenario) => {
    if (!scenario) {
      res.status(404).send("Record not found");
    } else {
      scenario.ScenarioName = req.body.ScenarioName;
      scenario.SavingsPerYear = req.body.SavingsPerYear;
      scenario.YearsToRetire = req.body.YearsToRetire;

      scenario
        .save()
        .then((scenario) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
scenarioRoutes.route("/delete/:id").get((req, res) => {
  Scenario.findByIdAndRemove({ _id: req.params.id }, (err, scenario) => {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = scenarioRoutes;
