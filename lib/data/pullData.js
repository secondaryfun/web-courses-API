const fetch = require('node-fetch')
// const writeToFile = require('../utilities/writeToFile')

const udemyKey = require('../../../keys/udemy.json')

const clientId = udemyKey.clientId
const clientSecret = udemyKey.clientSecret

const url = 'https://www.udemy.com/api-2.0/courses/'
const fs = require('fs')


const udemyData = require('./udemy.json')

console.log(udemyData.results.length)

writeToFile('./courses.json', udemyData.results)
function writeToFile(filePath, newObjectList) {
    console.log(filePath)
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err

        const objectList = JSON.parse(data)
        objectList.push(...newObjectList)
        console.log(objectList)
        fs.writeFile(filePath, JSON.stringify(objectList), 'utf-8', err => {
            if (err) throw err
            console.log('Done')
        })
    })
}

// fetch(url, {
//     method: 'GET',
//     Authorization: {`"${clientId}"`:`"${clientSecret}"`},
//     headers: {
//     'user': `${clientId}:${clientSecret}`,
//     'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
//     .then(items => {
//         console.log(items)
//     })
//     .catch(err => console.log(err))
