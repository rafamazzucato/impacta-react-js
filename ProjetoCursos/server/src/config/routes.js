const express = require('express');

module.exports = function (server) {
    //definir a URL base para todas as rotas
    const router = express.Router();
    server.use('/ws', router);

    //rotas relacionadas às operações com cursos e contatos
    const Cursos = require('../ws/cursos/cursosService');
    const Contatos = require('../ws/contatos/contatosService');

    Cursos.register(router, '/cursos');
    Contatos.register(router, '/contatos');
};