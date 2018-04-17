const request = require("request");

function simpleGet(callback){
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

function simpleGetWithParams(callback){
  request(
    {
/*
      url: "https://postman-echo.com/get",
      form: {
        foo: "bar",
        program: "camp2",
        people: ["Frieda", "Francis"]
      },
*/
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people[0]=Frieda&people[1]=Francis",
      method: "GET"
    },
    function(error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}

function getFormattedDate(date) {
  let month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  let day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return date.getFullYear() + "-" + month + "-" + day;
}

function validateTimestamp(callback){
  request(
    {
      url: "https://postman-echo.com/time/valid",
      form: {
        timestamp: getFormattedDate(new Date())
      },
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}

module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
};

/*
function logFunction(result) {
  console.log(result);
}

simpleGetWithParams(logFunction);
*/
