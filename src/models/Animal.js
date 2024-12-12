const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    breed: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    user: { type: String, required: true, index: true },
    pros: { type: String },
    cons: { type: String }
})

module.exports = mongoose.model('Animal', AnimalSchema)