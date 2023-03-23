require('dotenv').config()

const database = process.env.NAME_DATABASE;
const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

module.exports = {
    client: 'pg',
    connection: {
        host : 'db',
        database: database,
        user:     user,
        password: password,
        port: 5432
    },

    migrations: {
        tableName: 'knex_migrations'
    }
}