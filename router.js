const Url = require('./model')
const Router = require('express').Router()

Router.route('/new/:url').get((req, res) => {
    const query = {"originalUrl" : req.params.url}
    const projection = 'originalUrl shortUrl -_id'
    Url.findOne(query, projection, (err, url) => {
      if (err) return next(err)
      if (url) {
        return res.json(url)
      }
      const newRecord = new Url({originalUrl: req.params.url})
      newRecord.save()
      res.json(newRecord)
    })
  })

module.exports = Router

/*

Router.route('/new/:url').get((req, res) => {
  .patch((req, res) => {
    // findByIdandUpdate doesnt play nice with validation
    Task.find(req.params.taskId, (err, task) => {
      for (let field in req.body) { // eslint-disable-line no-unused-vars
        task.field = req.body.field
      }
      if (err) res.status(500).send(err)
      if (task) res.status(200).save(task)
      res.status(404).end()
    })
  })

Router.route('/')
  // Generic GET
  .get((req, res) => {
    let query = {}
    // filter by status if provided
    if (req.query.status) query.status = req.query.status
    Task.find(query, (err, tasks) => {
      if (err) res.status(500).send(err)
      if (tasks) res.status(200).json(tasks)
      res.status(404).end()
    })
  })
  // Generic POST
  .post((req, res) => {
    // getting rid of user provided ids in the req body to ensure
    // that mongo handles them exclusively
    if (req.body._id) delete req.body._id
    const task = new Task(req.body)
    task.save((err, tasks) => {
      if (err) res.status(500).send(err)
      if (tasks) res.status(201).json(tasks)
      res.status(404).end()
    })
  })

Router.route('/new/:url')
  // ById GET
  .get((req, res) => {
    const url = req.params.url
    Task.find(id, ({}, task) => {
      if (err) res.status(500).end()
      if (task) res.status(200).json(task)
      res.status(404).end()
    })
  })
  // ById PATCH
  .patch((req, res) => {
    // findByIdandUpdate doesnt play nice with validation
    Task.find(req.params.taskId, (err, task) => {
      for (let field in req.body) { // eslint-disable-line no-unused-vars
        task.field = req.body.field
      }
      if (err) res.status(500).send(err)
      if (task) res.status(200).save(task)
      res.status(404).end()
    })
  })

  // ById DELETE
  .delete((req, res) => {
    const id = req.params.taskId
    Task.findByIdAndRemove(id, (err, task) => {
      if (err) res.status(500).end()
      if (task) res.status(204).end()
      res.status(404).end()
    })
  })
*/
