require('dotenv').config();
const mongoose = require('mongoose');
//ASSIGN OPTIONS
const options = {};
//Add options and callback that verifies connection through console.log
mongoose.connect( process.env.URI );