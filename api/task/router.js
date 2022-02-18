// build your `/api/tasks` router here
const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    res.send("get from tasks router ")
})

router.post('/', (req, res, next) => {
    res.send("post from tasks router ")
})


module.exports = router