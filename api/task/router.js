// build your `/api/tasks` router here
const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    res.send("hi from tasks router ")
})

module.exports = router