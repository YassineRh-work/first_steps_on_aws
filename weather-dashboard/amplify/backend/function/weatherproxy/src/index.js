const axios = require('axios');

exports.handler = async (event) => {
    const city = event.queryStringParameters?.city || 'London'; // Default to London if no city is provided
    const apiKey = process.env.OPENWEATHER_API_KEY; // Retrieve API key from environment variables

    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                }
            }
        );

        return {
            statusCode: 200,
            headers: { "Access-Control-Allow-Origin": "*" }, // CORS headers to allow frontend requests
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Failed to fetch weather", error: error.message }),
        };
    }
};
