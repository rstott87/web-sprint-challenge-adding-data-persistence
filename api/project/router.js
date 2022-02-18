// build your `/api/projects` router here
const Project = require('./model')

const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    Project.find()
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const project = req.body
    Project.add(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})


module.exports = router