const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})
app.get('/home', (req, res) => {
    res.send("So you are in the homepage");
})

app.get('/dw', (req, res) => {
    res.download("test.txt");
    res.send("Your file is being downloaded")
})



app.listen(4000, () => {
    console.log("Server is running on port 3000");
})