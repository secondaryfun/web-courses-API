const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Instructor = new Schema({
    "title": String,
    "job_title": String,
    "url": String,
    "image_100x100": String,
    "display_name": String,
    "image_50x50": String,
})


const Discount = new Schema({
    "discount_percent": Number,
    "code": String,
    "discount_price": Number
})


const Course = new Schema({
    "title": String,
    "id": String,
    "url": String,
    "is_paid": Boolean,
    "price": Number,
    "price_serve_tracking_id": String,
    "visible_instructors": [Instructor],
    "image_125_H": String,
    "image_240x135": String,
    "image_480x270": String,
    "image_750x422": String,
    "is_practice_test_course": Boolean,
    "published_title": String,
    "tracking_id": String,
    "headline": String,
    // New
    "rating": Number,
    "num_reviews": Number,
    "num_reviews_recent": Number,
    "what_you_will_learn_data": [String],
    "who_should_attend_data": [String],
    "Video": [String],
    "description": String,
    "num_subscribers": Number,
    "language": String, // locale
    "caption_languages": [String],
    "discount": [Discount],
    "quality_status": String,
    "status_label": String,
    "has_certificate": Boolean,
    "primary_category": String,
    "primary_subcategory": String,
    "created": Date,
    "estimated_content_length": Number, //minutes
    "num_lectures": Number,
    "content_info": String

})

module.exports = mongoose.model('Course', Course)
