require('dotenv').config()

const express = require('express');
const consign = require('consign');
const port = process.env.PORT;
const dba = require("./src/database/db");
const bodyParser = require('body-parser');
const auth = require("./src/middlewares/auth");
const cors = require('cors');
const app = express();

app.db = dba; // Rota de configuração do banco de dados
app.use(cors());
app.use(bodyParser.json()) // JSON para trativa dos arquivos da api
app.use(bodyParser.urlencoded({extended: false}));

consign()
    .then("./src/api/validation.js")
    .then("./src/api")
    .then("./src/routes/register.js")
    .then("./src/routes/routes.js")
    .into(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
