require('dotenv').config();
const mongoose = require('mongoose');
//ASSIGN OPTIONS
const options = { useNewUrlParser: true, useUnifiedTopology: true };
//Add options and callback that verifies connection through console.log
const db = mongoose.connect( process.env.URI, options);

db
  .then(db => console.log('Connected to DB'))
  .catch(err => {
      console.log('There was an error connecting');
      console.log(err);
  })

module.exports = db;