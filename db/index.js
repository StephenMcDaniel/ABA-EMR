const mongoose = require('mongoose');
//implement dotenv
//ASSIGN URI
const uri = 'mongodb://localhost/URI GOES HERE';
//ASSIGN OPTIONS
const options = {};
mongoose.connect( uri, options);