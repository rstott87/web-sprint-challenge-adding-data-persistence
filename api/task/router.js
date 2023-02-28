// build your `/api/tasks` router here

const express = require("express");

const Tasks = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const tasks = await Tasks.addTask(req.body);
    if (!req.body["task_completed"] || req.body["task_completed"] === 0) {
      req.body["task_completed"] = false;
    } else {
      req.body["task_completed"] = true;
    }
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
