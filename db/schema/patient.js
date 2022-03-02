let mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
let Schema = mongoose.Schema;

let patientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
    index: true
  },
  preferredName: {
    type: String
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  insurance: {
    type: String,
    required: true
  },
  insuranceSecondary: {
    type: String
  },
  pnok: {
    type: String,
    required: true
  },
  pnokPhone: {
    type: String,
    required: true
  },
  snok: {
    type: String,
  },
  snokPhone: {
    type: String,
  }
});

const Patient = mongoose.model("Patient", patientSchema);
//Add Patient
let save = (patientData) => {
  let patient = new Patient(patientData);
  return Patient.save();
};

//Find Patient
let findPatient = (input) => {
  return Patient.find(input);
};

module.exports.savePatient = save;
module.exports.findPatient = findPatient;