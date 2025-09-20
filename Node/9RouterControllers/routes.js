const express = require('express');
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const contatoController = require('./src/Controllers/contatoController')

//Rotas da Home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas de Contato
route.get('/contato',contatoController.paginaInicial)

module.exports = route

/*
express.Router() cria um "mini-sistema de rotas" que será usado dentro do server.js.

Carrega os controllers → cada rota aponta para uma função do controller.

Define rotas:

GET / → chama homeController.paginaInicial

POST / → chama homeController.trataPost

GET /contato → chama contatoController.paginaInicial

Exporta (module.exports) → para ser usado no server.js.
*/
