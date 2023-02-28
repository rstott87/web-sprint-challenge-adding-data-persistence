// build your `/api/resources` router here

const express = require("express");
const Resources = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  await Resources.addResource(req.body)
    .then((resource) => {
      res.status(201).json(req.body);
    })
    .catch(next);
});

module.exports = router;
