// build your `Project` model here
const db = require('../../data/dbConfig');

function find() {
    return db('projects');
  }

  function add(project) { // EXERCISE D
    /*
      1D- This function creates a new scheme and resolves to _the newly created scheme_.
    */
   return db('projects').insert(project)
   .then((
     [project_id])=> {
      return db('projects').where('project_id', project_id)
    })
  } 


 module.exports = {find, add};


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