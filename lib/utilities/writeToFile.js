const fs = require('fs')

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

module.exports = writeToFile
