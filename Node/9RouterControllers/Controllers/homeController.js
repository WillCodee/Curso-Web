exports.paginaInicial = (req,res) => {
res.send(' <form action="/" method="POST"> Nome: <input type="text" name="nome"> <button>Enviar Formulário</button></form> ')
}

exports.trataPost = (req,res) => {
    res.send('Sou sua nova rota de Post')
}

/*
paginaInicial →
Quando acessa GET /, ele envia um HTML com um formulário.

O formulário tem method="POST" → vai enviar os dados para a mesma rota /.

trataPost →
Quando envia o formulário (rota POST /), 
responde com um texto "Sou sua nova rota de Post".
*/
