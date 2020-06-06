const mongoose = require("mongoose")
const db = 'web-courses'
let mongoURI = ""

console.log(`.env.NODE_ENV = ${process.env.NODE_ENV}`)

if (process.env.NODE_ENV !== 'production') {
    const pass = require('../../../../keys/atlas.json')
    mongoURI = `mongodb+srv://secondaryfun:${pass.password}@cluster0-dryfk.mongodb.net/${db}?retryWrites=true&w=majority`;
}
else mongoURI = process.env.DB_URL

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(instance =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose
