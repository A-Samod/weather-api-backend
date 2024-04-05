const WeatherData = require("../models/weatherData");
const LogData = require("../models/log");

/**
 * 
 * @returns 
 */
async function healthCheckData() {
  try {
    const msg = "Health Check Status : Success";
    return msg;
  } catch (error) {
    const msg = "Health Check Status : Failed";
    return msg;
  }
}

/**
 * 
 * @param {*} district 
 * @returns 
 */
async function fetchWeatherData(district) {
  try {
    let query = {};
    if (district) {
      query = { district: district };
    }
    console.log("location ====>>>", district);
    const weatherData = await WeatherData.find(query);
    console.log("weather-data ===>>> ", weatherData);

    return weatherData;
  } catch (error) {
    throw error;
  }
}

async function fetchWeatherDataHistory(district) {
  try {
    let query = {};
    if (district) {
      query = { "data.location": district };
    }
    console.log("location ====>>>", district);
    // const weatherData = await LogData.find(query);
    const weatherData = await LogData.find(query).sort({"timestamp": -1});
    console.log("weather-data ===>>> ", weatherData);

    return weatherData;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchWeatherDataHistory,
  fetchWeatherData,
  healthCheckData,
};
