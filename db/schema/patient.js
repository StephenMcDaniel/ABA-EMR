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


let cptSchema = new Schema({
  procedureName: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  CPTCode: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
});

const Patient = mongoose.model("Patient", patientSchema);
let save = (patientData) => {
    let patient = new Patient(patientData);
    return Patient.save();
  };

exports.savePatient = save;