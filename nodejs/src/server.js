'use strict';

const express = require('express');

const PORT = 5000;
const HOST = '0.0.0.0';

const app = express();

/*app.get('/add/', (req, res) => {
    res.send(' Added to the constellation\n');
});

app.get('/remove/', (req, res) => {
    res.send('Removed from the constellation \n');
});

app.get('/control/', (req, res) => {
    res.send('Orbit Controlling Microservice Mock Response \n');
});

app.get('/monitor/', (req, res) => {
    res.send(' \n');
});*/

app.get('/', (req, res) => {
    res.send('Hello world \n');
});

app.listen(PORT, HOST);

console.log(`Running version 3 on http://${HOST}:${PORT}`);