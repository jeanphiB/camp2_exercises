const fetch = require("node-fetch");

const API_KEY = process.env.WEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lat, lon) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json());
}

weatherByLatitudeAndLongitude(50.64, 3.19)
  .then((weather) => console.log(`${weather.main.temp}°C`))
  .catch((error) => console.warn(error));
// weatherByZipcode("59510", "fr");

module.exports = {
  weatherByLatitudeAndLongitude,
//  weatherByZipcode
};
