//swagger for healthCheck
const healthCheck = {
  get: {
    summary: "healthCheck",
    description: "healthCheck",
    tags: ["healthCheck"],
    responses: {
      200: {
        description: "Health Check Success",
        schema: {
          type: "object",
          properties: {
            code: {
              type: "string",
              description: "200",
            },
            message: {
              type: "string",
              description: "Success",
            },
            data: {
              type: "string",
              description: "Health Check Success",
            },
          },
        },
      },
      400: {
        description: "Bad Request",
      },
      401: {
        description: "Unauthorized",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

//swagger for weather data
const weatherData = {
  get: {
    summary: "weatherData",
    description: "weatherData API",
    tags: ["Weather API"],
    parameters: [
      {
        name: "district",
        in: "query",
        required: false,
      },
    ],
    responses: {
      200: {
        description: "Success",
      },
      400: {
        description: "Bad Request",
      },
      401: {
        description: "Unauthorized",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

module.exports = {
  healthCheck,
  weatherData,
};
