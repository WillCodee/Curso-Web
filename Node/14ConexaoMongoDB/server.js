require('dotenv').config()

const express = require('express');
const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    console.log('Conectado ao MongoDB')
    app.emit('Conectado')
})
.catch((err)=> console.error('Erro ao conectar ao MongoDB',err))


const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/Middlewares/middleware')

app.use(express.urlencoded({extended:true})) //Vai tratar o body das requisições

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', './src/views')
app.set('view engine', 'ejs') // npm install ejs

//Nosos proprio middlewares
app.use(middlewareGlobal)
app.use(routes)

app.on('Conectado', ()=>{
    app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});
})


























