// build your `/api/projects` router here

const express = require("express");

const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const projects = await Projects.addProject(req.body);
    if (!req.body["project_completed"] || req.body["project_completed"] === 0)  {
      req.body["project_completed"] = false;
    } else {
      req.body["project_completed"] = true;
    }
    res.json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
