/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('launch', table =>  {
            table.increments('id').primary()
            table.string('descricao', 255).notNullable()
            table.integer('tipo', 255).notNullable()
            table.integer('recorrencia', 255).notNullable()
            table.string('valor').notNullable()
            table.date('data_vencimento').notNullable()
            table.date('data_criacao').notNullable()
            table.date('data_atualizacao').notNullable()
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('launch');
};
