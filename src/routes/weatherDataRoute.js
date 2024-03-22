const express = require("express");
const { getWeatherData } = require("../controllers/weatherDataController");

const router = express.Router();

router.route("/details").get(getWeatherData);

module.exports = { router };
