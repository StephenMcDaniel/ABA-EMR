require('dotenv').config();
const morgan = require('morgan');
const path = require("path");
const express = require('express');
const app = express();
const port = process.env.PORT;
const db = require('../db');
const { findPatient } = require('../db/schema/patient.js');


app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

app.get('/patients', (req, res) => {
  // console.log('findPatient', findPatient);
  findPatient({lastName: 'Bulbeck'})
    .then(result => {
      console.log('result', result);
      res.send(result);
    })
    .catch(err => {
      console.log('error', err);
    });
})

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});