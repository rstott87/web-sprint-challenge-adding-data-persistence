
const Tasks = require('./model')

// build your `/api/tasks` router here
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Tasks.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
    const task = req.body
    Tasks.add(task)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next)
})


module.exports = router