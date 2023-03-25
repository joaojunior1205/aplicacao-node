/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('launch', table => {
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id').references('id').inTable('user')
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('launch', table => {
     table.dropColumns(['user_id']);
  });
};
