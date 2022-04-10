const mongoose = require('mongoose')
const Schema = mongoose.Schema
const typeString = require('../utils/String')
const typeNumber = require('../utils/Number')

const UserSchema = new Schema({
    email:typeString,
    password:typeString,
    phoneNumber:{type:String},
},{timestamps:true})

module.exports = mongoose.model('users',UserSchema)