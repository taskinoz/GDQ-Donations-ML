const fs = require('fs');

var files = JSON.parse(fs.readFileSync("gamesdonequick.json"));
const customLength = 3000;
var filename;
if (customLength){
  size = customLength;
  filename = "gdqtext-"+size+"length.txt";
}
else {
  size = files.length;
  filename = "gdqtext.txt";
}


var text="";


for (var i = 0; i < size; i++) {
  text += files[i].text+"\n";
}

// console.log(files);

fs.writeFileSync(filename,text);
