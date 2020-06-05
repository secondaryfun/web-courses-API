let courses = require('./all-courses.json')
const Category = require('../models/Category')

// Pull categories from course data.
const cats = courses.map(course => {
    return course["primary_category"].title
})
catList = [...new Set(cats)]  // Remove duplicates

// Build Category object
const categories = {}
catList.forEach(cat => {
    categories[cat] = []
})

// Add subcategories to object
courses.forEach(course => {
    categories[course['primary_category'].title].push(course["primary_subcategory"].title)
})

console.log(Object.keys(categories))
console.log(categories)
const seedData = Object.keys(categories).map(cat => {
    let catObj = {}
    catObj.title = cat
    // console.log(categories.cat)
    // catObj['sub-categories'] = categories.cat.map(subCat => subCat)
})

console.log(seedData)

// Category.deleteMany({}).then(() => {
//     Category.create(seedData)
//         .then(items => {
//             console.log(items)
//             process.exit
//         })
//         .catch(err => {
//             console.log(err)
//         })
// })
