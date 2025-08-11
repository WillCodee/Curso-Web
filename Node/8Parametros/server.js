const express = require('express');
const app = express()

app.get('/', (req,res) => { //Requisição get pra x pagina e realiza uma  resposta
    res.send(' <form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar Formulário</button></form> ')
});

// app.get('/testes/:idUsuarios', (req,res) => {
//     console.log(req.params)
//     res.send('OI')
// })

app.use(express.urlencoded({extended:true})) //Vai tratar o body das requisições

app.get('/teste/:idUsuarios/idParams', (req,res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
})

app.post('/', (req,res) => {
    console.log(req.body)
    res.send(`Formulário: ${req.body.nome}`)
})


app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});

























