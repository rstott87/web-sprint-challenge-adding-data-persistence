const projects = [

{"project_id":1,"project_name":"Project One","project_description":null,"project_completed":false},
{"project_id":2,"project_name":"Project Two","project_description":null,"project_completed":false},
{"project_id":3,"project_name":"Project Three","project_description":null,"project_completed":true},
{"project_id":4,"project_name":"Project Four","project_description":null,"project_completed":true},

]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)

}