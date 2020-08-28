const express = require('express')
const app = express()
const cors = require('cors')
sampleJSON = require('../data/sampleJSON.json')

app.use(cors());

app.get('/', (req, res) => {
  res.json(sampleJSON)
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running...`)
})
