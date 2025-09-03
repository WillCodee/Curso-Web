const express = require('express');
const route = express.Router()
const homeController = require('./src/Controllers/homeController')
const loginController = require('./src/Controllers/loginController')

//Rotas da Home
route.get('/',  homeController.index) 

//Rotas de login
route.get('/login/index',loginController.index)

module.exports = route;
