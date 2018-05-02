const fetch = require("node-fetch");
const path = require("path");
const express = require("express");
const app = express();

const API_KEY = "09b92c0eea827e285793781fbd765423";

function weatherByCityName(city) {
  return fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`,
    {method: "GET"}
  )
    .then((response) => response.json());
}

app.get("/weatherByCityName/:city", function (request, result) {
  weatherByCityName(request.params.city)
    .then((weather) => result.json(weather))
    .catch((error) => result.send(error));
});

app.get("/image/:id", function (request, result) {
  result.sendFile(path.join(__dirname + `/image/${request.params.id}`));
});

function getHTML(weather) {
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf8" />
        <title>02 open weather front</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Weather</a>
          <form class="form-inline my-2 my-lg-0">
            <input name="city" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <div class="container">
          <div class="row">`;
  if (weather !== undefined) {
    if (weather.cod === "404") {
      html += `error: ${weather.message}`;
    } else if (weather.weather !== undefined) {
      weather.weather.forEach(weather =>{
      html += `<div class="col-md-4 col-md-offset-4">
          <p>
            Weather description: ${weather.description}
            <img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="${weather.icon}">
          </p>
        </div>`;
      }) ;
    }
  }
  html += `</div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
      </body>
    </html>`;
  return html;
}

app.get("/", function (request, result) {
  if(request.query.city !== undefined) {
    weatherByCityName(request.query.city)
      .then((weather) => {
        result.send(getHTML(weather));
      });
  } else {
    result.send(getHTML(undefined));
  }
  //result.sendFile(path.join(__dirname + "/index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
