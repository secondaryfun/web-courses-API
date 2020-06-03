const Course = require('../models/Course')
const courseData = require('../data/courses.json')

const courseSeed = courseData.map(course => {
    let mapData = {}
    mapData["id"] = course["id"],
        mapData["title"] = course["title"],
        mapData["url"] = course["url"],
        mapData["is_paid"] = course["is_paid"],
        mapData["price"] = course["price_detail"]["amount"],
        mapData["price_serve_tracking_id"] = course["price_serve_tracking_id"],
        mapData["visible_instructors"] = [
            {
                "title": course["visible_instructors"]["title"],
                "job_title": course["visible_instructors"]["job_title"],
                "url": course["visible_instructors"]["url"],
                "image_100x100": course["visible_instructors"]["image_100x100"],
                "display_name": course["visible_instructors"]["display_name"],
                "image_50x50": course["visible_instructors"]["image_50x50"],
            }],
        mapData["image_125_H"] = course["image_125_H"],
        mapData["image_240x135"] = course["image_240x135"],
        mapData["is_practice_test_course"] = course["is_practice_test_course"],
        mapData["image_480x270"] = course["image_480x270"],
        mapData["published_title"] = course["published_title"],
        mapData["tracking_id"] = course["tracking_id"],
        mapData["headline"] = course["headline"],
        mapData["instructor_name"] = course["instructor_name"]
    return mapData
})

Course.deleteMany({})
Course.create(courseSeed)
    .then(items => {
        console.log(items)
        process.exit
    })
    .catch(err => {
        console.log(err)
    })
