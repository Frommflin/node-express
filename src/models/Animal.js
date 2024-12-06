const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    type: { type: String, required: true },
    breed: { type: String, required: true },
    user: { type: String, required: true},
    pros: { type: String },
    cons: { type: String }
})

module.exports = mongoose.model('Animal', AnimalSchema)