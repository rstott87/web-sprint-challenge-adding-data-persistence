// build your `Task` model here
const db = require('../../data/dbConfig');

function find() {
  return db('projects as p')
  .join('tasks as t', 'p.project_id', 't.project_id')
  .select('t.task_id', 't.task_description', 't.task_notes', 'p.project_name', 'p.project_description', )
  }
 
  function add(tasks) { 
    return db('tasks').insert(tasks)
    .then((
      [tasks_id])=> {
       return db('tasks').where('tasks_id', tasks_id)
     })
   } 
 


 module.exports = {find, add};
