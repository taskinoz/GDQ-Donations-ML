const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const apiData = {};

const options ={
    host:"gamesdonequick.com",
    path:"/tracker/donation/"
};
var counter = 602170;
var end = 611022;

function requestQuote(i) {
  options.path="/tracker/donation/"+i;
  var request = https.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
      const $ = cheerio.load(data);
      apiData[counter] = $('[class*="commentstate"]').text().toString();
      console.log($('[class*="commentstate"]').text().toString());
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
  check();
  counter++;
}

function check() {
  if (counter < end) {
    setTimeout(function() {
      requestQuote(counter);
    },2000);
    fs.writeFileSync("scraped.json",JSON.stringify(apiData));
  }
  else {
    fs.writeFileSync("scraped.json",JSON.stringify(apiData));
  }
}

check();
