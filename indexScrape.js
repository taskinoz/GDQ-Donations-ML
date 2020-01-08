const fs = require('fs');

var files = JSON.parse(fs.readFileSync("scraped.json"));
var filename = "scraped.txt";
var txt;

602170
611022

for (var i = 602170; i < 611022; i++) {
  txt+=files[i]
}

fs.writeFileSync(filename,txt);
