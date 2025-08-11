// const multiplicação = require('./mod2')
// console.log(multiplicação(2,3))


const dog = require('./mod2')

const cachorro = new dog('Golden')
cachorro.latir()


console.log(__filename) //Nome da Pasta atual
console.log(__dirname) // Nome do arquivo atual

const path = require('path') //Localiza arquivos ou pastas
console.log(path.resolve(
    __dirname, '..','..','arquivos','imagens'
))





















