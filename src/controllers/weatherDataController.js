const {
  fetchWeatherData,
  healthCheckData,
} = require("../services/weatherDataService");

//Healthcheck Function
async function healthCheck(req, res) {
  try {
    const msg = await healthCheckData();
    console.log("Health Check Status : Success");
    res.status(200).json({
      status: 200,
      data: msg,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      data: msg,
      error: error.message,
      message: "Health Check Failed",
    });
  }
}

//Fetch weather data from DB
async function getWeatherData(req, res) {
  try {
    const district = req.query.district;
    const weatherData = await fetchWeatherData(district);
    res.status(200).json({
      status: 200,
      data: weatherData,
      message: "Weather data fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      message: "Error fetching weather data",
    });
  }
}

module.exports = {
  getWeatherData,
  healthCheck,
};
