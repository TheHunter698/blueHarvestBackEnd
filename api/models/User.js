const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    surname: String,
    ID: Number,
})

var user = mongoose.model('users', userSchema)

module.exports  = user