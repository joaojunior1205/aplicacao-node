require('dotenv').config()
const express = require('express');
const consign = require('consign');
const port = process.env.PORT;
const dba = require("./src/database/db");
const bodyParser = require('body-parser');
const auth = require("./src/middlewares/auth");
const jwt = require("jsonwebtoken");
const config = require("./src/config/jwtConfig");
const cors = require('cors');
const app = express();

app.db = dba; // Rota de configuração do banco de dados
app.use(cors());
app.use(bodyParser.json()) // JSON para trativa dos arquivos da api
app.use(bodyParser.urlencoded({extended: false}));

// Func para gerar novos token
app.post('/register', (request, response) => {
    const user = {...request.body};

    const token = jwt.sign({id: user.id}, config.secret, { // Gerando token JWT
        expiresIn: 84200 // expira em 24 horas
    });

    response
        .status(200)
        .send({auth: true, token: token});
});

// middlewares para sempre verificar a autenticação do usuário
app.use(auth);

// Scripts startandos junto com a aplicação
consign()
    .then("./src/api/validation.js")
    .then("./src/api")
    .then("./src/routes/routes.js")
    .into(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
