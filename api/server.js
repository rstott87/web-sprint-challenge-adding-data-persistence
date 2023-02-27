// build your server here and require it from index.js

const express = require("express");

const server = express();

const projectRouter = require("../api/project/router");

const taskRouter = require("../api/task/router");

const resourceRouter = require("../api/resource/router");

server.use(express.json());

server.use("/api/projects", projectRouter);

server.use("/api/resources", resourceRouter )

server.use("/api/tasks", taskRouter);

server.use("*", (req, res, next) => {
    next({ status: 404, message: `${req.method} ${req.originalUrl} not found` });
    }
);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: "something went wrong in the server",
        message: err.message,
        stack: err.stack,
    });
    }
);

module.exports = server;

