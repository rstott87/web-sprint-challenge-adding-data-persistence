const projects = [

{"project_id":1,"project_name":"Project One","project_description":"One project desc","project_completed":false},
{"project_id":2,"project_name":"Project Two","project_description":"Two project desc","project_completed":false},
{"project_id":3,"project_name":"Project Three","project_description":"Three project desc","project_completed":true},
{"project_id":4,"project_name":"Project Four","project_description":"Four project desc","project_completed":true},

]

const tasks = [
    {"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":1},
    {"task_id":2,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":1},
    {"task_id":3,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":2},
    {"task_id":4,"task_description":"baz","task_notes":null,"task_completed":false,"project_id":2},
]

const resources = [
    {"resource_id":1,"resource_name":"one","resource_description":null},
    {"resource_id":2,"resource_name":"two","resource_description":null},
    {"resource_id":3,"resource_name":"three","resource_description":null},
]
exports.seed = async function (knex) {
    await knex('projects').insert(projects),
    await knex('tasks').insert(tasks),
    await knex('resources').insert(resources)
}