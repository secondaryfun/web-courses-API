const express = require('express')
const app = express()

let port = process.env.port
if (port == null || port == "") port = 8000

app.use(express.json())
app.use(require('./routes/router'))
app.listen(port, () => console.log('listening on port 3000'))
