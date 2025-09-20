const express = require('express');
const app = express()
const routes = require('./routes')


app.use(express.urlencoded({extended:true})) //Vai tratar o body das requisições
app.use(routes)

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});


/*
Carrega o Express → framework para criar o servidor.

Cria a aplicação (app) → base para trabalhar com rotas e middlewares.

Importa as rotas de routes.js.

Middleware express.urlencoded({extended:true})

Serve para interpretar os dados enviados via formulário (POST).

Exemplo: se enviar nome=Maria, isso vira req.body.nome = "Maria".

app.use(routes) → adiciona o arquivo routes.js como conjunto de rotas da aplicação.

app.listen(3000) → inicia o servidor na porta 3000.
*/