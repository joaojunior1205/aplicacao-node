const jwt = require("jsonwebtoken");
const config = require("../config/jwtConfig");
const firebase = require("firebase");
const {onStartFirebase} = require("../firebase/onStartFirebase");
const {getUserFromEmail} = require("../controllers/user-controller");

module.exports = app => {
    const refreshToken = async (request, response) => {
        try {
            const user = {...request.body};

            // Valida se foi informado o e-mail e a senha
            if (!user.email || !user.password)
                throw  `Error: Insert 'email' and 'password'`;

            // Se o firebase ainda não estiver inicializado, então vamos inicializar o mesmo.
            if (!firebase.apps.length)
                onStartFirebase();

            const auth = await firebase.auth();

            // Validando as credenciais do usuário
            const singIn = await auth.signInWithEmailAndPassword(user.email, user.password);

            // Verificando se deu tudo certo com a autenticação
            if (singIn?.operationType !== "signIn")
                throw  `Error: Auth failed'`;

            const userExists = await getUserFromEmail(user.email);

            const token = jwt.sign({email: user.email}, config.secret, { // Gerando token JWT
                expiresIn: 2526000 // expira em 30 dias
            });

            response.status(200).send({token: token});
        } catch (err) {
            response.status(500).send(err);
        }
    }

    return {refreshToken};
}