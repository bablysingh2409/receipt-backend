const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  expenditureType:String,
  amount:String
}, { timestamps: true });

const Email = mongoose.model('EmailCollection', emailSchema);

module.exports = Email;
 