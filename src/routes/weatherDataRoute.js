const express = require("express");
const {
  getWeatherData,
  healthCheck,
  getWeatherDataHistory,
  findMaxTemp,
  findMinTemp,
  findMinMAxTemp
} = require("../controllers/weatherDataController");

const router = express.Router();

router.route("/healthCheck").get(healthCheck);
router.route("/weather/details").get(getWeatherData);
router.route("/weather/history/details").get(getWeatherDataHistory);
router.route("/weather/max-temp").get(findMaxTemp);
router.route("/weather/min-temp").get(findMinTemp);
router.route("/weather/min-max-temp").get(findMinMAxTemp);

module.exports = { router };
