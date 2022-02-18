// build your `/api/projects` router here


const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    res.send("hi from project router ")
})

module.exports = router