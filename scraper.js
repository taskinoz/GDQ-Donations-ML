const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const apiData = [];

const options ={
    host:"gamesdonequick.com",
    path:"/tracker/donation/"
};
var counter = -1;
var begin = 602170;
var end = 641557;

function stringToDate(input) {
  //input = "January 10th, 2020, 11:18:42 AM";
  input = (input.replace(/,/g,"")).split(" ");
  console.log(input);
  year = ~~input[2];
  month = input[0];
  day = ~~input[1].replace(/[a-z]/g,"");
  time = input[3].split(":");
  ampm = input[4] == "PM" ? 12 : 0;

  // Update Time with AM/PM (~~) turns string into int
  time[0] = ~~time[0]+ampm;
  // Turn month into number
  switch (month) {
    case "January": month=0;break;
    case "February": month=1;break;
    case "March": month=2;break;
    case "April": month=3;break;
    case "May": month=4;break;
    case "June": month=5;break;
    case "July": month=6;break;
    case "August": month=7;break;
    case "September": month=8;break;
    case "October": month=8;break;
    case "November": month=10;break;
    case "December": month=11;break;
  }
  // Create Date
  date = (([year, month, day]).concat(time));
  date = new Date(...date);
  return date;
}

function requestQuote(i) {
  options.path="/tracker/donation/"+i;
  var request = https.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
      const $ = cheerio.load(data);
      let obj={};
      obj.username = $('h2.text-center a').text();
      obj.text = ($('[class*="commentstate"]').text().toString()).replace(/\n/g,"");
      obj.id = begin-1;
      obj.time = $('h2.text-center .datetime').text();
      obj.amount = ($('h2.text-center').text().replace(/\n/g,'').split("Amount:$")[1])-0;
      apiData[counter] = obj;
      console.log($('[class*="commentstate"]').text().replace(/\n/g,''));
    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
  check();
  begin++;
  counter++;
}

function check() {
  if (begin < end) {
    setTimeout(function() {
      requestQuote(begin);
    },1500);
    fs.writeFileSync("scrapedv3.json",JSON.stringify(apiData));
  }
  else {
    fs.writeFileSync("scrapedv3.json",JSON.stringify(apiData));
  }
}

check();
