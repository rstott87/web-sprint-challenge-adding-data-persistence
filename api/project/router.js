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
    res.send("POST from project router ")
})

module.exports = router