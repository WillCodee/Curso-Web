const express = require('express');
const route = express.Router()

const homeController = require('./src/Controllers/homeController')
const loginController = require('./src/Controllers/loginController')
const contatoController = require('./src/Controllers/contatoController')

const { loginRequired }  = require('./src/Middlewares/middleware')

//Rotas da Home
route.get('/',  homeController.index) 

//Rotas de login
route.get('/login/index',loginController.index)
route.post('/login/register',loginController.register)
route.post('/login/login',loginController.login)
route.get('/login/logout',loginController.logout)

//Rotas de Contato
route.get('/contato/index', loginRequired, contatoController.index)
route.post('/contato/register', loginRequired, contatoController.register)
route.get('/contato/index/:id', loginRequired, contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired, contatoController.edit)
route.get('/contato/delete/:id', loginRequired, contatoController.delete)

module.exports = route;
