const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv').config({silent: true});
const app = express()

const PORT = process.env.PORT || 4000
const DBURI = process.env.DBURI || 'mongodb://localhost/urls'
mongoose.connect('mongodb://anthony:tony2025@ds139567.mlab.com:39567/shorturl')

app.use('/', require('./router'))
app.get('/', express.static('public'))
app.listen(PORT, () => console.log('App running on port: ' + PORT))
