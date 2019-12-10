const fs = require('fs');

var files = JSON.parse(fs.readFileSync("gamesdonequick.json"));
const customLength = 8000;
var filename;
if (customLength){
  size = customLength;
  filename = `gdqtext-${size}length.txt`;
}
else {
  size = files.length;
  filename = "gdqtext.txt";
}


var text="";


for (var i = 6000; i < size; i++) {
  text += files[i].text+"\n";
}

// console.log(files);

fs.writeFileSync(`js-out/${filename}`,text);
