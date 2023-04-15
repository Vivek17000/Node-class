// const express = require('express')

// const app = express();

// app.get('/:id', (req, res) => {
  

//     res.send(`The temperature is ${req.params["id"]} farenheit and ${((req.params["id"]-32)*5)/9} `);

// });

// // app.post('/form', (req, res) => {
// //     res.
// // })



// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

const http = require('http')
const server=http.createServer();

server.on('request', (req, res) => {
    const a = (num)=>{
        return (num-32)*5/9;
    }
    res.end(a(30))
})
