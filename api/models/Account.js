const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    propietary: mongoose.Types.ObjectId,
    created: Date,
    initialCredit: Number,
    authDoc: String,
})

var account = mongoose.model('accounts', accountSchema)

module.exports  = account