const fetch = require('node-fetch')
const udemyKey = require('../../../keys/udemy.json')
const fs = require('fs')

const clientId = udemyKey.clientId
const clientSecret = udemyKey.clientSecret
const url = 'https://www.udemy.com/api-2.0/courses/'
const auth = 'Basic ' + Buffer.from(clientId + ":" + clientSecret).toString('base64')

let courses = []

fetch(url, {
    method: 'GET',
    headers: {
        Authorization: auth
    }
})
    .then(res => res.json())
    .then(data => {
        writeToFile('./courses.json', data.results)
        // fs.writeFile('./courses.json', JSON.stringify(data.results), 'utf-8', err => {
        //     if (err) throw err
        //     console.log('Done')
        // })
    })

function writeToFile(filePath, newObjectList) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) throw err

        const objectList = JSON.parse(data)
        objectList.push(...newObjectList)
        fs.writeFile(filePath, JSON.stringify(objectList), 'utf-8', err => {
            if (err) throw err
            console.log('Done')
        })
    })
}
