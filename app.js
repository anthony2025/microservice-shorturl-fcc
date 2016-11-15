const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv').config();
const app = express()

const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI || 'mongodb://localhost/urls'
mongoose.connect(DBURI)

app.use('/', require('./router'))
app.get('/', express.static('public'))
app.listen(PORT, () => console.log('App running on port: ' + PORT))
