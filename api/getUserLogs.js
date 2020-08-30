const express = require('express')
const app = express()
const cors = require('cors')

//Data Source: Hard-coded JSON entries
sampleJSON = require('../data/sampleJSON.json')

//Content for server landing page
const serverPageDescription = "<h1>Mock server to retrieve Users and their activity periods<br></h1>";
const linkToJSON = "<h2>Use /getUserLogs endpoint to access JSON or click <a href='/getUserLogs'>here</a></h2>";
const linkToApp = "<h2>Click <a href='https://ui-user-access-logs.herokuapp.com/' target='_blank'>here</a> to go to Web Application</h2>"

//CORS necessary for webapp access
app.use(cors());

//Landing page
app.get('/', (req, res) => {
  res.send(serverPageDescription + linkToJSON + linkToApp);
})

//Endpoint to fetch data source
app.get('/getUserLogs', (req, res) => {
  res.json(sampleJSON)
})

//Port specification for heroku and local dev
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running...`)
})
