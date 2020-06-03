const mongoose = require("mongoose")
const pass = require('../../../../keys/atlas.json')
const db = 'web-courses'
const mongoURI = `mongodb+srv://secondaryfun:${pass.password}@cluster0-dryfk.mongodb.net/${db}?retryWrites=true&w=majority`;
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(instance =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch(err => console.log("Connection Failed.", err));

module.exports = mongoose
