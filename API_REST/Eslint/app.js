import dotenv from 'dotenv';
dotenv.config()

import './src/database'

import express from 'express'
import home from './src/routes/home'
import user from './src/routes/user'

class App{
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes()
  }

  middlewares(){
    this.app.use(express.urlencoded({extended: true})) //Compreenda dados via formulário HTML
    this.app.use(express.json())//Compreenda dados em formato JSON
  }

  routes(){
    this.app.use('/',home)
    this.app.use('/users/',user)
  }
}

//Exportar o express
export default new App().app
