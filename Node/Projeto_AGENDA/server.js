require('dotenv').config() //variaveis de ambiente no arquivo .env

const express = require('express');
const app = express()
const mongoose = require('mongoose')

//Modela nossa base de dados e garante o recebimento
//dos dados
mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    console.log('Conectado ao MongoDB')
    app.emit('Conectado') //Ira emitir a requisação
})
.catch((err)=> console.error('Erro ao conectar ao MongoDB',err))

const session = require('express-session') //Identifica o navegador de um cliente
const MongoStore = require('connect-mongo')// As sessões vão ser salvas dentro da base de dados
const flash = require('connect-flash')// mensagens que apois serem lidas, somem.
const routes = require('./routes')//rotas da aplicação
const path = require('path')// Caminhos
const helmet = require('helmet')//Trabalha nos cabeçalhos para uma navegação mais segura
const csrf = require('csurf')//Cria Tokens para os formulários assim garantindo mais segurança
//Middlewares -> Funções executadas na rota
const {middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/Middlewares/middleware')

app.use(express.urlencoded({extended:true})) //Postar formularios pra dentro da nossa aplicação
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(helmet())

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

app.set('views', './src/views') //arquivos que a gente renderiza na tela
app.set('view engine', 'ejs') // npm install ejs

app.use(csrf())
//Nosos proprio middlewares
app.use(middlewareGlobal) 
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)

app.on('Conectado', ()=>{ //irá ouvir a requisição
    app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});
})

