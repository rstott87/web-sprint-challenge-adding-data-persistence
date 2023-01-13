/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("resources", (tbl) => {
    tbl.increments();
    tbl.string("name").notNullable().unique();
    tbl.string("description").notNullable();
  });
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};
