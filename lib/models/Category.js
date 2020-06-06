const mongoose = require('../db/connection')
const Schema = mongoose.Schema



const Category = new Schema({
    "title": String,
    "sub-categories": [String]
})

module.exports = mongoose.model('Category', Category)
