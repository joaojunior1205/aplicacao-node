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

    const requestInsertDB = await db('user')
        .insert(sendDB)
        .catch(err => err)

    return requestInsertDB;
}

const updateUser = async (user = {}, token = null) => {
    const dateCurrent = new Date().toISOString();
    const userTemp = {...user};

    const sendDB = {
        id: user.id,
        nome: userTemp.nome,
        segundo_nome: userTemp.segundo_nome,
        email: userTemp.email,
        password: userTemp.password,
        token: token ? token : userTemp.token,
        data_atualizacao: dateCurrent,
        data_criacao: userTemp.data_criacao,
        data_ultimo_acesso: userTemp.data_ultimo_acesso,
    }

    const run = await db('user')
        .where({id: user.id, email: user.email})
        .update(sendDB)
        .catch(err => err)

    return run;
};

const getUserFromEmail = async (email) => {
    const run = await db('user')
        .where({email: email})
        .limit(1)
        .catch(err => err)

    return run;
};

module.exports = {getUserFromEmail, updateUser, insertUser}
