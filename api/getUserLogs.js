const express = require('express')
const app = express()
const port = 3000
sampleJSON = require('../data/sampleJSON.json')

app.get('/', (req, res) => {
  res.send(sampleJSON)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
