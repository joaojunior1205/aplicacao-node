const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");
const bcrypt = require('bcrypt');
const {insertUser} = require("../controllers/user-controller");

module.exports = app => {
    const {notExistsOrError} = app.src.api.validation;
    const saltRounds = 10;

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);
    };

    const checkPassword = (password, hash) => {
        return bcrypt.compareSync(password, hash); // true
    };

    const newUser = async (request, response) => {
        try {
            const user = {...request.body};
            const token = jwt.sign({email: user.email}, config.secret, { // Gerando token JWT
                expiresIn: 2526000 // expira em 30 dias
            });

            insertUser(user, token)
                .then(_ => response.status(200).send())
                .catch(err => response.status(500).send(err));

            return response.status(200).json();
        } catch (err) {
            response
                .status(500)
                .send(err)
        }
    };

    const getUser = async (request, response) => {
        const getUsers = await app.db('user')
            .select('id', 'nome', 'segundo_nome', 'email', 'data_criacao', 'data_atualizacao', 'data_ultimo_acesso')
            .catch(err => response.status(500).send(err));

        response.status(200).send(getUsers)
    };


    return {newUser, getUser}
}