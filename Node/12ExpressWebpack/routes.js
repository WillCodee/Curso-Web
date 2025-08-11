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
