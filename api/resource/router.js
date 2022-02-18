// build your `/api/resources` router here
const router = require('express').Router()
// const Recipe = require('./recipe-model')

router.get('/', (req, res, next) => {
    res.send("hi from resources router ")
})

module.exports = router