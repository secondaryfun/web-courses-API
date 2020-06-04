const courseData = require('../data/all-courses.json')

courseData.map(course => {
    let videoList = []
    if (course["promo_asset"]) videoList = course["promo_asset"]["download_urls"]["Video"].map(video => {
        return video.file
    })
    console.log(videoList)
})
