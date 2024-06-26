const {
  fetchWeatherData,
  healthCheckData,
  fetchWeatherDataHistory,
  findMaxTemperature,
  findMinTemperature,
  findMinMaxTemperature
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

//Fetch weather data history from DB
async function getWeatherDataHistory(req, res) {
  try {
    const district = req.query.district;
    const weatherData = await fetchWeatherDataHistory(district);
    res.status(200).json({
      status: 200,
      data: weatherData,
      message: "Weather data history fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      message: "Error fetching weather data",
    });
  }
}

//find max temperature
async function findMaxTemp(req, res) {
  try {
    const tempData = await findMaxTemperature();
    res.status(200).json({
      status: 200,
      data: tempData,
      message: "Max temperature fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      message: "Error fetching weather data",
    });
  }
}

//find min temperature
async function findMinTemp(req, res) {
  try {
    const tempData = await findMinTemperature();
    res.status(200).json({
      status: 200,
      data: tempData,
      message: "Min temperature fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      message: "Error fetching weather data",
    });
  }
}

//find min temperature
async function findMinMAxTemp(req, res) {
  try {
    const tempData = await findMinMaxTemperature();
    res.status(200).json({
      status: 200,
      data: tempData,
      message: "Min temperature fetched successfully",
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
  findMinMAxTemp,
  findMinTemp,
  findMaxTemp,
  getWeatherDataHistory,
  getWeatherData,
  healthCheck,
};
