//npm run gera
//vá pro package.json
//ctrl+c para a execução
console.log('Olá Mundo!')
import multiplica, { nome, idade, sobrenome, soma, Pessoa } from './modulo1'
//  import  qualquerNome from './modulo1'

console.log(nome, idade, sobrenome)
console.log(soma(3,5))
console.log(multiplica(3,5))
const p1 = new Pessoa('Luiz','Otavio')
console.log(p1)
