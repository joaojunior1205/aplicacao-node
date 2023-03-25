const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");
const bcrypt = require('bcrypt');

module.exports = app => {
    const {notExistsOrError} = app.src.api.validation;
    const saltRounds = 10;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    };

    const checkPassword = (password, hash) => {
        return bcrypt.compareSync(password, hash); // true
    }

    const getUser = async (request, response) => {
        const getUsers = await app.db('user')
            .select('id', 'nome', 'segundo_nome', 'email', 'data_criacao', 'data_atualizacao', 'data_ultimo_acesso')
            .catch(err => response.status(500).send(err));

        response.status(200).send({...getUsers})
    }

    const newUser = async (request, response) => {
        try {
            const user = {...request.body};
            const dateCurrent = new Date().toISOString();
            const token = jwt.sign({email: user.email}, config.secret, { // Gerando token JWT
                expiresIn: 2526000 // expira em 30 dias
            });

            notExistsOrError(!user.nome, 'Preencha nome')
            notExistsOrError(!user.segundoNome, 'Preecnha segundoNome')
            notExistsOrError(!user.email, 'Preencha email')
            notExistsOrError(!user.password, 'Preencha password')

            const userExists = await app.db('user')
                .select('email')
                .where({email: user?.email})
                .catch(err => response.status(500).send(err));

            if (userExists?.length)
                throw `E-mail ${user?.email} já cadastrado!`;

            const sendDB = {
                nome: user.nome,
                segundo_nome: user.segundoNome,
                email: user.email,
                password: encryptPassword(user.password),
                token: token,
                data_criacao: dateCurrent,
                data_atualizacao: dateCurrent,
                data_ultimo_acesso: dateCurrent,
            }

            app.db('user')
                .insert(sendDB)
                .then(_ => response.status(200).send())
                .catch(err => response.status(500).send(err));

            return response.status(200).json({...sendDB});
        } catch (err) {
            response
                .status(500)
                .send(err)
        }
    }

    return {newUser, getUser}
}