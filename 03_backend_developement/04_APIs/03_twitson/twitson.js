const request = require("request");
const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);

function getTwitsAndAnalyse(screenName) {
  oauth.get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + screenName,
    process.env.TWITTER_ACCESS_TOKEN,
    process.env.TWITTER_ACCESS_SECRET,
    function (error, data) {
      if (error) {
        console.log(error);
      }
      else {
        const twits = JSON.parse(data);
        // console.log(twitts);
        const texts = twits.map(function(tweet) {
          return tweet.text;
        });
        //console.log(texts);
        analyseTextArray(texts);
      }
    }
  );
}

function analyseTextArray(texts) {
  const username = process.env.WATSON_USERNAME;
  const password = process.env.WATSON_KEY;
  const url = process.env.WATSON_URL;
  const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

  //const text = "I can't believe the news today";
  //const text = "What a beautifull day today";
  const text = texts.join(". ");
  const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

  request(
    {
      url: uri,
      headers: {"Authorization": auth},
      method: "GET"
    },
    function (error, response, body) {
      const label = JSON.parse(body).sentiment.document.label;
      console.log(label);
    }
  );
}

//getTwitsAndAnalyse("jstrachan");
analyseTextArray(["What a beautifull day today"]);

module.exports = {
  getTwitsAndAnalyse,
  analyseTextArray
};
