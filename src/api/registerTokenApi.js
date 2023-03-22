const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");

module.exports = (request, response, next) => {
    const get = (request, response) => {
        const token = request.headers['x-acess-token'];

        if (!token)
            return response
                .status(401)
                .send({auth: false, message: 'Nenhum token informado.'});

        jwt.verify(token, config.secret, function (err, decoded) {
            if (err)
                response
                    .status(500)
                    .send({auth: false, message: 'Falha na autenticação'});

            response
                .status(200)
                .send(decoded);
        })
    }


    return {get};
}