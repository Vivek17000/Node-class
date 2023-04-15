// import {http} from 'http'
const http = require('http')
const fs = require('fs')
// import fs from 'fs'
const server=http.createServer();

server.on('request', (req, res) => {


    fs.readFileSync('stream.txt',(err,data)=>{

   
    if(err) throw (err);
    res.end(data.toString);
    });
});

server.listen(3000,()=>{
    console.log('listening on port');
})

// import stream1 from 'stream1';

// http.createServer.on(function (req, res) {

//     Server.on()

// }).listen(9000);


