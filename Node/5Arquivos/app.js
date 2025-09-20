const path = require('path') //módulo para trabalhar com caminhos (resolve, join, etc.).
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


/*
Define o caminho do arquivo teste2.json.

Importa os módulos de escrever e ler.

A função lerArquivo carrega o conteúdo do arquivo JSON 
e passa para renderizaDados.

renderizaDados converte o JSON para objeto JavaScript 
(JSON.parse) e exibe o nome de cada pessoa no console.
*/