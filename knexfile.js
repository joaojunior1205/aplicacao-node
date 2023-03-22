require('dotenv').config()

const database = process.env.NAME_DATABASE;
const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

module.exports = {
    client: 'postgresql',
    connection: {
        database: database,
        user:     user,
        password: password
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}