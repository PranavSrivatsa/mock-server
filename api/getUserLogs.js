const express = require('express')
const app = express()
sampleJSON = require('../data/sampleJSON.json')

app.get('/', (req, res) => {
  res.json(sampleJSON)
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running...`)
})
