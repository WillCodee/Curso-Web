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

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/Middlewares/middleware')

app.use(express.urlencoded({extended:true})) //Vai tratar o body das requisições

app.use(express.static(path.resolve(__dirname, 'public')))


const sessionOptions = session({
    secret: '12413sdvgagvagvaeg',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

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


























