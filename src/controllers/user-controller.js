const config = require('../../knexfile');
const bcrypt = require("bcrypt");
const db = require('knex')(config);

const saltRounds = 10;

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
};

const checkPassword = (password, hash) => {
    return bcrypt.compareSync(password, hash); // true
};

const insertUser = async (user = {}, token) => {
    const dateCurrent = new Date().toISOString();

    if (!user.nome || !user.segundo_nome || !user.email || !user.password) {
        throw 'Preencha todas as informações obrigatórias: [nome, segundo_nome, email, password]'
    }

    const userExists = getUserFromEmail(user.email);

    if (userExists?.length)
        throw `E-mail ${user?.email} já cadastrado!`

    const sendDB = {
        nome: user.nome,
        segundo_nome: user.segundo_nome,
        email: user.email,
        password: encryptPassword(user.password),
        token: token,
        data_criacao: dateCurrent,
        data_atualizacao: dateCurrent,
        data_ultimo_acesso: dateCurrent,
    }

    await db('user')
        .insert(sendDB)
        .catch(err => err)
}

const getUserFromEmail = async (email) => {
    await db('user')
        .where({email: email})
        .limit(1)
        .catch(err => err)
};

const updateUser = async (user) => {

}

module.exports = {getUserFromEmail, updateUser, insertUser}
