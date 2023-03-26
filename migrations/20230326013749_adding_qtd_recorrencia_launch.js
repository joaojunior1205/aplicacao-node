/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('launch', table => {
        table.integer('qtd_recorrencia').defaultTo(1).notNullable()
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('launch', table => {
        table.dropColumns(['qtd_recorrencia']);
    });
};
