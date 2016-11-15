const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv').config({silent: true});
const app = express()

const PORT = process.env.PORT
const DBURI = process.env.DBURI
mongoose.connect(DBURI)

app.use('/', require('./router'))
app.get('/', express.static('public'))
app.listen(PORT, () => console.log('App running on port: ' + PORT))
