const Url = require('./model')
const Router = require('express').Router()

Router.route('/new/:url').get((req, res) => {
  const query = {originalUrl: req.params.url}
  const projection = 'originalUrl shortUrl -_id'
  Url.findOne(query, projection, (err, url) => {
    if (err) return next(err)
    if (url) return res.json(url)
    const newRecord = new Url({originalUrl: req.params.url}).save()
    res.json(newRecord)
  })
})

Router.route('/:url').get((req, res) => {
  const query = {shortUrl: req.params.url}
  Url.findOne(query, (err, url) => {
    if (err) return next(err)
    if (url) return res.redirect('http://' + url.originalUrl)
    res.status(404).send('Url not found')
  })
})

module.exports = Router
