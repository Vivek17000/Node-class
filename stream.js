const fs= require('fs')
fs.readFile("./stream.txt", (err,data)=>{
    if(err){
        throw(err);
    }
    console.log(data.toString());
});

