const fetch = require("node-fetch");

const API_KEY = process.env.WEATHER_API_KEY;

function weatherByCityName(city) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json());
}

weatherByCityName("Lille")
  .then((weather) => console.log(`${weather.main.temp}°C`))
  .catch((error) => console.warn(error));

module.exports = weatherByCityName;
