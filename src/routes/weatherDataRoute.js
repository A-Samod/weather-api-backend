const express = require("express");
const {
  getWeatherData,
  healthCheck,
  getWeatherDataHistory
} = require("../controllers/weatherDataController");

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/weather/details").get(getWeatherData);
router.route("/weather/history/details").get(getWeatherDataHistory);

module.exports = { router };
