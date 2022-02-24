let mongoose = require('mongoose');
let Schema = mongoose.Schema;

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

const CPT = mongoose.model("CPT", cptSchema);
let findCpt = (input) => {
    return CPT.find(input);
  };

exports.findCpt = findCpt;