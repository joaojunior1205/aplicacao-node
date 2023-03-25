require('dotenv').config()

const database = process.env.NAME_DATABASE;
const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;
const url = process.env.URL;

module.exports = {
    client: 'pg',
    connection: url || {
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