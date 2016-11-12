const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI || 'mongodb://localhost/tododb'

mongoose.connect(DBURI)

// app.use('/', require('./router'))
app.get('/', express.static('public'))
app.listen(PORT, () => console.log('App running on port: ' + PORT))
