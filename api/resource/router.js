
const Resource = require('./model')

const router = require('express').Router()
// const Recipe = require('./recipe-model')


    router.get('/', (req, res, next) => {
        Resource.find()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(next)
    })


router.post('/', (req, res, next) => {
    res.send("post from resources router ")
})

module.exports = router