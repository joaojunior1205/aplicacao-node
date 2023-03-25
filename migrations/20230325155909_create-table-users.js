/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary()
        table.string('nome', 255).notNullable()
        table.string('segundo_nome', 255).notNullable()
        table.string('email', 255).notNullable()
        table.string('password', 255).notNullable()
        table.string('token').notNullable()
        table.date('data_criacao').notNullable()
        table.date('data_atualizacao').notNullable()
        table.date('data_ultimo_acesso').notNullable()
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
};
