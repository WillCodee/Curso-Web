const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste2.json');
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

//ESCREVER
// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Jose'},
//     {nome: 'Carlos'},
//     {nome: 'Luiza'},
// ]

// const json = JSON.stringify(pessoas, '',2)
// escreve(caminhoArquivo, json)


async function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
}

function renderizaDados(dados){
   dados = JSON.parse(dados)

   dados.forEach(val => console.log(val.nome))
}

lerArquivo(caminhoArquivo)