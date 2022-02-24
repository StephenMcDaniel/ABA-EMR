let mongoose = require('mongoose');
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
  DOB: {
    type: Date,
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
  pendingServices: [{
    type: String,
    required: true
  }],
  authorizedServices: [{
    type: String
  }]
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

exports.savePatient = save;
exports.findPatient = findPatient;