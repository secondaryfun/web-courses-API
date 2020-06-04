const Course = require('../models/Course')
const courseData = require('../data/courses.json')
// console.log(courseData)

const courseSeed = courseData.map(course => {
    let mapData = {}



    mapData["id"] = course["id"]
    mapData["title"] = course["title"]
    mapData["url"] = course["url"]
    mapData["is_paid"] = course["is_paid"]
    mapData["price"] = course["price_detail"]["amount"]
    mapData["price_serve_tracking_id"] = course["price_serve_tracking_id"]

    course["visible_instructors"].forEach

    mapData["visible_instructors"] = course["visible_instructors"].map(instructor => {
        let instructorData = {}

        instructorData["title"] = instructor["title"]
        instructorData["job_title"] = instructor["job_title"]
        instructorData["url"] = instructor["url"]
        instructorData["image_100x100"] = instructor["image_100x100"]
        instructorData["display_name"] = instructor["display_name"]
        instructorData["image_50x50"] = instructor["image_50x50"]

        return instructorData
    })
    mapData["image_125_H"] = course["image_125_H"]
    mapData["image_240x135"] = course["image_240x135"]
    mapData["is_practice_test_course"] = course["is_practice_test_course"]
    mapData["image_480x270"] = course["image_480x270"]
    mapData["published_title"] = course["published_title"]
    mapData["tracking_id"] = course["tracking_id"]
    mapData["headline"] = course["headline"]
    mapData["instructor_name"] = course["instructor_name"]
    return mapData
})

Course.deleteMany({}).then(() => {
    Course.create(courseSeed)
        .then(items => {
            console.log(items)
            process.exit
        })
        .catch(err => {
            console.log(err)
        })
})
