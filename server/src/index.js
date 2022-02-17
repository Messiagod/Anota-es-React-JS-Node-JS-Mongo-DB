/* 'require' é o import do node js */
const express = require('express');
const routes = require('./routes');
const app = express(); /* utilizar todas as funcionalidades do express */
require('./config/dbConfig');

const PORT = 3333

app.use(express.json()); /* um "plugin" para utilizarmos json nas requisições */
app.use(routes);

app.listen(PORT);
console.log(`Servidor iniciado na porta: "http://localhost:${PORT}"`)


/* Request é oq nosso navegador solicita para o backend
   Response é oq nosso backend vai fornecer para nossa request
*/
/* app.get('/', (request, response) => {
    console.log("acessou")
    return response.json({
        nome: "Matheus Lima",
        profissão: "Desenvolvedor"
    });
}); */