// build your `/api/resources` router here
const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    res.send("get from resources router ")
})

router.post('/', (req, res, next) => {
    res.send("post from resources router ")
})

module.exports = router