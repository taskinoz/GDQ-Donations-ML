const fs = require('fs');

var files = JSON.parse(fs.readFileSync("gamesdonequick.json"));
const customLength = Math.floor(Math.random() * files.length/2);
var filename;
if (customLength){
  size = customLength;
  filename = `gdqtext-random.txt`;
}
else {
  size = files.length;
  filename = "gdqtext.txt";
}


var text="";


for (var i = 0; i < size; i++) {
  if ((Math.floor(Math.random() * 50) == 7)) {
    text += files[i].text+"\n";
    console.log(files[i].text);
  }
}

// console.log(files);

fs.writeFileSync(`js-out/${filename}`,text);
