const Course = require('../models/Course')
const courseData = require('../data/all-courses.json')
// console.log(courseData)

const courseSeed = courseData.map(course => {
    let mapData = {}



    mapData["id"] = course["id"]
    mapData["title"] = course["title"]
    mapData["url"] = course["url"]
    mapData["is_paid"] = course["is_paid"]
    mapData["price"] = course["price_detail"]["amount"]
    mapData["price_serve_tracking_id"] = course["price_serve_tracking_id"]

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
    mapData["image_480x270"] = course["image_480x270"]
    mapData["image_750x422"] = course["image_750x422"]
    mapData["is_practice_test_course"] = course["is_practice_test_course"]
    mapData["published_title"] = course["published_title"]
    mapData["tracking_id"] = course["tracking_id"]
    mapData["headline"] = course["headline"]
    mapData["rating"] = course["rating"]
    mapData["num_reviews"] = course["num_reviews"]
    mapData["num_reviews_recent"] = course["num_reviews_recent"]

    if (course["what_you_will_learn_data"]) mapData["what_you_will_learn_data"] = course["what_you_will_learn_data"].items.map(item => {
        return item
    })
    if (course["who_should_attend_data"].items) mapData["who_should_attend_data"] = course["who_should_attend_data"].items.map(item => {
        return item
    })
    if (course["caption_locales"]) mapData["caption_languages"] = course["caption_locales"].map(locale => locale.title)

    if (course["promo_asset"]) mapData["video"] = course["promo_asset"]["download_urls"]["Video"].map(video => {
        return video.file
    })

    if (course["discount"]) mapData["discount"] = {
        "discount_percent": course["discount"]["discount_percent"],
        "code": course["discount"]["code"],
        "discount_price": course["discount"]["price"]["amount"]
    }
    mapData["description"] = course["description"]
    mapData["num_subscribers"] = course["num_subscribers"]
    mapData["language"] = course["locale"]["title"]
    mapData["quality_status"] = course["quality_status"]
    mapData["status_label"] = course["status_label"]
    mapData["has_certificate"] = course["has_certificate"]
    mapData["primary_category"] = course["primary_category"]["title"]
    mapData["primary_subcategory"] = course["primary_subcategory"]["title"]
    mapData["created"] = course["created"]
    mapData["estimated_content_length"] = course["estimated_content_length"]
    mapData["content_info"] = course["content_info"]
    mapData["num_lectures"] = course["num_lectures"]


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
