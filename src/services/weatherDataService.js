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

async function findMaxTemperature() {
  try {
    const weatherData = await WeatherData.find({}).sort({ "temperature": -1 }).limit(25);
    
    let maxTemperature = -Infinity;
    let districtWithMaxTemperature = "";

    weatherData.forEach((data) => {
      const temperature = data.temperature;
      const district = data.district;
      
      if (temperature > maxTemperature) {
        maxTemperature = temperature;
        districtWithMaxTemperature = district;
      }
    });

    return { maxTemperature, districtWithMaxTemperature };
  } catch (error) {
    throw error;
  }
}

async function findMinTemperature() {
  try {
    const weatherData = await WeatherData.find({}).sort({ "temperature": 1 }).limit(25);
    
    let minTemperature = Infinity;
    let districtWithMinTemperature = "";

    weatherData.forEach((data) => {
      const temperature = data.temperature;
      const district = data.district;
      
      if (temperature < minTemperature) {
        minTemperature = temperature;
        districtWithMinTemperature = district;
      }
    });
    return { minTemperature, districtWithMinTemperature };
  } catch (error) {
    throw error;
  }
}

async function findMinMaxTemperature() {
  try {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);
    const result = await LogData.aggregate([
      {
        $match: {
          updatedAt: { $gte: twentyFourHoursAgo }
        }
      },
      {
        $group: {
          _id: null,
          minTemperature: { $min: "$temperature" },
          maxTemperature: { $max: "$temperature" }
        }
      },
      {
        $project: {
          _id: 0,
          minTemperature: 1,
          maxTemperature: 1
        }
      }
    ]);

    console.log("result >>>", result)
    return result[0]; 
  } catch (error) {
    throw error;
  }
}


module.exports = {
  findMinMaxTemperature,
  findMinTemperature,
  findMaxTemperature,
  fetchWeatherDataHistory,
  fetchWeatherData,
  healthCheckData,
};
