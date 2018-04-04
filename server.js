const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data_arr = [];

app.post('/insert', (req, res) => {
    const data = req.body;
    // data = JSON.parse(data);
    data_arr.push(data);
    console.log(data);
    res.end();
});

app.get('/get', (req, res) => {
    console.log("requesting data");
    res.json(data_arr);
});

app.listen(2800);