const request = require("request");

const API_KEY = process.env.WEATHER_API_KEY;

function weatherByLatitudeAndLongitude(lat, lon) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

function weatherByZipcode(zipcode, country) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

// weatherByLatitudeAndLongitude(50.64, 3.19);
// weatherByZipcode("59510", "fr");

module.exports = {
  weatherByLatitudeAndLongitude,
  weatherByZipcode
};
