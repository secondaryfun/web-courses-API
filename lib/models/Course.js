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

const Video = new Schema({
    "type": String,
    "label": String,
    "file": String
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
    "is_practice_test_course": Boolean,
    "image_480x270": String,
    "published_title": String,
    "tracking_id": String,
    "headline": String,
    "instructor_name": String,
    "avg_rating": Number,
    "avg_rating_recent": Number,
    "rating": Number,
    "num_reviews": Number,
    "num_reviews_recent": Number,
    "image_750x422": String,
    "what_you_will_learn_data": [],
    "who_should_attend_data": [],
    "Video": [Video]
})

module.exports = mongoose.model('Course', Course)
