// Core
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// AUTHORIZATION
// const AuthZ = require('./authorize.js');

const PORT = 3000;

// ********** Endpoints For Services **********

// Get config.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'), function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent HTML file');
    }
  });
});

app.get('/health-check', (req, res) => {
  res.status(200).send('MyReads running...')
});

app.listen(PORT);
console.log(`Running on port ${PORT}...`)
