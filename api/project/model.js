// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db('projects');
  }
 
 module.exports = {find};


 //returned from test
// [
//     {
//         "project_id": 1,
//         "project_name": "Web API",
//         "project_description": "Build APIs",
//         "project_completed": null
//     },
//     {
//         "project_id": 2,
//         "project_name": "Databases",
//         "project_description": "Learn SQL",
//         "project_completed": 1
//     }
// ]