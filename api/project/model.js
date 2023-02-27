// build your `Project` model here

const db = require("../../data/dbConfig");

function getProjects() {
    let query = db("projects as p");
    query.select(
        "p.project_id",
        "p.project_name",
        "p.project_description",
        "p.project_completed"
    );

    return db("projects");
    }

function addProject(project) {
    let query = db("projects as p");
    query.select(
        "p.project_id",
        "p.project_name",
        "p.project_description",
        "p.project_completed"
    );
    
    return db("projects").insert(project);
    }

module.exports = {
    getProjects,
    addProject
};
