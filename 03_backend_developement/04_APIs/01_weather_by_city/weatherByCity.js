const request = require("request");

const API_KEY = process.env.WEATHER_API_KEY;

function weatherByCityName(city) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
      method: "GET"
    },
    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

//weatherByCityName("Lille");

module.exports = weatherByCityName;
