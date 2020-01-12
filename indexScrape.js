const fs = require('fs');

var files = JSON.parse(fs.readFileSync("scrapedv3.json"));
var filename = "scrapedv3.txt";
var txt;

//console.log(files[0].text);

for (var i = 0; i < files.length-1; i++) {
  console.log(i);
  console.log(files[i].text);
  txt+=files[i].text+"\n";
}


fs.writeFileSync(filename,txt);
