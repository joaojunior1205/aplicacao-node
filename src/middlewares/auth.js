const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");

module.exports = (request, response, next) => {
    const token = request && request.headers && request.headers['api_key'];

    if (!token)
        return response?.status(401)?.send({message: 'Nenhum token informado'});

    const parts = token.split('.');

    if (parts.length !== 3)
        return response?.status(401)?.send({message: 'Token invalido'});

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
            response
                .status(500)
                .send({auth: false, message: err});

        return next();
    })
}