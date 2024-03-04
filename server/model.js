const mongoose = require('mongoose')

const schema = mongoose.Schema({
    email:String,
    password:String
})

const mod = mongoose.model('samples',schema)

module.exports = mod