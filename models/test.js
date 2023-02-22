

const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.models.Test || mongoose.model('Test', testSchema)
