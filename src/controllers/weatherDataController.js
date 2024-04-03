const { fetchWeatherData } = require("../services/weatherDataService");

async function getWeatherData(req, res) {
  try {
    const district = req.query.district;
    const weatherData = await fetchWeatherData(district);
    res
      .status(200)
      .json({
        status: 200,
        data: weatherData,
        message: "Weather data fetched successfully",
      });
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        error: error.message,
        message: "Error fetching weather data",
      });
  }
}

module.exports = {
  getWeatherData,
};
