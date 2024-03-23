const WeatherData = require("../models/weatherData");

async function healthCheckData() {
  try {
    const msg = "Health Check Status : Success";
    return msg;
  } catch (error) {
    const msg = "Health Check Status : Failed";
    return msg;
  }
}

async function fetchWeatherData(district) {
  try {
    let query = {};
    if (district) {
      query = { location: district };
    }
    console.log("location ====>>>", district);
    const weatherData = await WeatherData.find(query);
    console.log("weather-data ===>>> ", weatherData);

    return weatherData;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchWeatherData,
  healthCheckData,
};
