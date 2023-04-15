import fs from 'fs';

var stream;
stream = fs.createReadStream("./stream.txt");

stream.on("data", function(data) {
    var chunk = data.toString();
    console.log(chunk);
}); 
