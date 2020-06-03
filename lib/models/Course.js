const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Course = new Schema({
    "title": String,
    // example data: "AWS Certified Solutions Architect - Associate 2020",
    "id": String,
    // example data: 362328,
    "url": String,
    // example data: "/course/aws-certified-solutions-architect-associate/",
    "is_paid": Boolean,
    // example data: true,
    "price": Number,
    // example data: "$179.99",
    "price_serve_tracking_id": String,
    // example data: "MwH0GXo_RJGLOlvR4iz51Q",
    "visible_instructors": [
        {
            "title": String,
            // example data: "Ryan Kroonenburg",
            "job_title": String,
            // example data: "Solutions Architect",
            "url": String,
            // example data: "/user/ryankroonenburg/",
            "image_100x100": String,
            // example data: "https: String ,
            // example data://img-a.udemycdn.com/user/100x100/646294_3e1d_3.jpg",
            "display_name": String,
            // example data: "Ryan Kroonenburg",
            "image_50x50": String,
            // example data: "https: String ,
        }],
    "image_125_H": String,
    // example data:  "https://img-a.udemycdn.com/course/125_H/793796_0e89.jpg",
    "image_240x135": String,
    // example data:  "https://img-a.udemycdn.com/course/240x135/793796_0e89.jpg",
    "is_practice_test_course": Boolean,
    // example data:  false,
    "image_480x270": String,
    // example data:  "https://img-a.udemycdn.com/course/480x270/793796_0e89.jpg",
    "published_title": String,
    // example data:  "microsoft-excel-2013-from-beginner-to-advanced-and-beyond",
    "tracking_id": String,
    // example data:  "ODIyRk3gQzO9Y7TjlzQzOg",
    "headline": String,
    // example data:  "Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365",
    "instructor_name": String,
    // example data:  null
})

module.exports = mongoose.model('Course', Course)
