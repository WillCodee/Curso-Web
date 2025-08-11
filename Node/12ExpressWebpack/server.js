const express = require('express');
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended:true})) //Vai tratar o body das requisições

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', './src/views')
app.set('view engine', 'ejs') // npm install ejs

app.use(routes)

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});

























