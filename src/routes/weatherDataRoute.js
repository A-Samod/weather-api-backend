const express = require("express");
const {
  getWeatherData,
  healthCheck,
} = require("../controllers/weatherDataController");

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/weather/details").get(getWeatherData);

module.exports = { router };
