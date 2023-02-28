// build your `Resource` model here

const db = require("../../data/dbConfig");
function getResources() {
  let query = db("resources as r");
  query.select("r.resource_id", "r.resource_name", "r.resource_description");
  return db("resources");
}

function addResource(resource) {
  let query = db("resources as r");
  query.select("r.resource_id", "r.resource_name", "r.resource_description");
  return db("resources").insert(resource);
}

module.exports = {
  getResources,
  addResource
};
