const { healthCheck, weatherData } = require("./path");

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Weather Data API",
    version: "1.0.0",
    description: "Weather Data APIs",
  },
  servers: [
    {
      url: process.env.SWAGGER_DOCS_DEV_API,
      description: "Dev",
    },
    {
      url: process.env.SWAGGER_DOCS_PROD_API,
      description: "Prod",
    },
  ],
  paths: {
    "/healthCheck": healthCheck,
    "/weather/details": weatherData,
    "/weather/history/details": weatherData,
    "/weather/history/pipeline": weatherData,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

module.exports = swaggerDoc;
