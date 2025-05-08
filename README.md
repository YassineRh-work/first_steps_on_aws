# 🌤️ Weather Dashboard

A modern **Weather Dashboard** built with **React** and **AWS Amplify**. This application allows users to get real-time weather information by entering a city name. The app is powered by the **OpenWeatherMap API**, **AWS Lambda**, and **API Gateway** for backend functionality. The frontend is a dynamic and user-friendly interface that updates every 15 minutes with the latest weather data.

---

## 📋 Features

- **Real-time Weather Updates**: Fetch current weather data for any city.
- **Dynamic Weather Icons**: Displays relevant weather icons based on the weather description (e.g., clear sky, rain, snow).
- **Wind Speed & Humidity Info**: View additional weather data, such as wind speed and humidity.
- **Automatic Data Refresh**: Weather data automatically refreshes every 15 minutes for updated information.
- **Responsive Design**: Mobile-friendly and responsive layout.

---

## 🖥️ Technologies Used

- **Frontend**:
  - React.js
  
- **Backend**:
  - Node.js
  - AWS Lambda
  - AWS API Gateway
  - OpenWeatherMap API

- **Hosting**: 
  - AWS Amplify for deployment

---

## 🚀 Getting Started

Follow the steps below to get the app running locally on your machine.

### 1. Clone the repository:
```bash
git clone https://github.com/YassineRh-work/first_steps_on_aws.git
cd weather-dashboard
```
### 2. Install dependencies:
```bash
npm install
```
### 3. Setup env variables:
Create a .env file in the root directory and add your OpenWeatherMap API key. This will be used to fetch weather data.
You can get a free API key from OpenWeatherMap by signing up on their website.
```bash
REACT_APP_API_KEY=your-openweathermap-api-key
```
### 4. Run the app locally:
```bash
npm start
```
Your app should now be running on http://localhost:3000.

## 🔧 API Integration
This app is powered by AWS services and the OpenWeatherMap API:

- The React frontend sends a GET request to the AWS API Gateway endpoint at:
https://cef00mv5yf.execute-api.eu-west-3.amazonaws.com/dev/weather?city={cityName}

- API Gateway triggers the AWS Lambda function (weatherproxy), which interacts with the OpenWeatherMap API to fetch weather data.

- The Lambda function returns the weather data back to the frontend, which then displays the weather information to the user.

## 💻 Deployment
This app is deployed using AWS Amplify, allowing for easy deployment and scaling of the app. Amplify automatically handles the hosting of both frontend and backend resources.

## 💾 Backend Configuration
Lambda Function: The weatherproxy Lambda function processes incoming requests from the API Gateway, fetches data from the OpenWeatherMap API, and returns the weather data.

API Gateway: The API Gateway routes requests to the Lambda function. It handles CORS and ensures that the frontend can interact with the backend securely.

Amplify CLI: Used to set up and configure AWS resources. For deployment, you can use the following commands:

amplify status: Check the current status of backend resources.

amplify push: Deploy changes to the cloud.

amplify publish: Deploy both frontend and backend.

## 🖼️ Preview
Here’s an example of the app’s interface:

![Weather Dashboard Screenshot](https://github.com/YassineRh-work/first_steps_on_aws/blob/main/preview.png)

The app is already deployed on this link: https://main.dquqj4263evly.amplifyapp.com/
