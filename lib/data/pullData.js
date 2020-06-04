const fetch = require('node-fetch')
const udemyKey = require('../../../keys/udemy.json')
const fs = require('fs')

const clientId = udemyKey.clientId
const clientSecret = udemyKey.clientSecret
const url = 'https://www.udemy.com/api-2.0/courses/?fields[course]=@all&page_size=99&page='
const auth = 'Basic ' + Buffer.from(clientId + ":" + clientSecret).toString('base64')

let courses = []
let fileCounter = 0

loadCourses()


async function loadCourses() {
    let courseRequest = null
    let courseData = []
    let timeout
    let filePath = './all-courses.json'



    for (let i = 1; i <= 50; i++) {
        courseRequest = getData(i)

        await courseRequest.then(async courseData => {
            courses.push(...courseData.results)

            await fs.readFile(filePath, 'utf-8', async (err, data) => {
                if (err) throw err

                const objectList = JSON.parse(data)
                objectList.push(...courseData.results)
                console.log(objectList.length)
                await fs.writeFile(filePath, JSON.stringify(objectList), 'utf-8', err => {
                    if (err) throw err
                    console.log('Done')
                })
            })
            console.log(courses.length)
        })
    }
}

// async function loadCourses() {
//     let requestBuffer = []
//     for (let i = 1; i < 3; i++) {
//         for (let j = 0; j < 1; j++) {
//             requestBuffer.push(getData(i))
//         }
//     }

//     await Promise.all(requestBuffer).then(bumperData => {
//         bumperData.forEach(course => {
//             courses.push(...course.results)
//         })
//         // console.log(courses)
//         // writeToFile('./courses.json', courses)
//         console.log(courses.length)
//     })
// }

function getData(urlIndex) {
    return new Promise((resolve, reject) => {
        fetch(url + urlIndex, {
            method: 'GET',
            headers: {
                Authorization: auth
            }
        })
            .then(res => res.json())
            .then(data => resolve(data))
    })
}


// fetch(url, {
//     method: 'GET',
//     headers: {
//         Authorization: auth
//     }
// })
//     .then(res => res.json())
//     .then(data => {
// writeToFile('./courses.json', data.results)
//         // fs.writeFile('./courses.json', JSON.stringify(data.results), 'utf-8', err => {
//         //     if (err) throw err
//         //     console.log('Done')
//         // })
//     })
async function writeToFile(filePath, newObjectList) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err

        const objectList = JSON.parse(data)
        objectList.push(...newObjectList)
        fs.writeFile(filePath, JSON.stringify(objectList), 'utf-8', err => {
            if (err) throw err
            console.log('Done')
        })
    })
    // fileCounter++
    // const writeStream = fs.createWriteStream("courseList-" + fileCounter)
    // writeStream.write(newObjectList)
    // writeStream.end()
}
