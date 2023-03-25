const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");

module.exports = app => {
    const refreshToken = (request, response) => {
        const user = {...request.body};

        if (!user.email)
            throw `Error: envie o e-mail do usuário para criar um novo JWT.`

        const token = jwt.sign({email: user.email}, config.secret, { // Gerando token JWT
            expiresIn: 2526000 // expira em 30 dias
        });

        response
            .status(200)
            .send({token: token});
    }

    return {refreshToken};
}