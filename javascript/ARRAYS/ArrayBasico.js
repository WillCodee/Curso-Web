
//                  0        1       2
const alunos = ['William','Maria','Luiz'];
console.log(alunos)
console.log(alunos[1]) //mostra o indice do array
console.log(alunos[2])
delete alunos[2] //Delete o valor porém não altera o indice

alunos [0] = 'Silva' //altera o indice
alunos[3] = 'Luiza' //adiciona
console.log(alunos)
console.log(alunos.length) //informa a quantidade de arrays

alunos.push('Otavio')//Coloca um elemento no final do array
alunos.push('Fabio')

alunos.unshift('William') //Adiciona no inicio
alunos.unshift('Valnei')

console.log(alunos)

const removido=alunos.pop()//remove o ultimo elemento
console.log(removido)
console.log(alunos)

const removido1=alunos.shift()//remove o primeiro elemento
console.log(removido1)
console.log(alunos)

//delete alunos [1] //Remove um indoce ele fica vazio
//console.log(alunos)

console.log(alunos.slice(0,3)) //fatiar os arrays
console.log(alunos.slice(0,-2)) 

console.log(typeof alunos)
console.log(alunos instanceof Array) //É um Array]

console.log('###################################################')

const names = new Array('Eduardo','Maria','Joana','Wallace','Rosana') //Construtor

//Valores por referência
let novo = [...names] //Copia e altera
novo.pop()
console.log(names)
console.log(novo)

novo = names //Copia
console.log(names)
console.log(novo)

console.log('###################################################')

let fatiar = names.slice(0,3)
console.log(fatiar)
fatiar = names.slice(0,-1)
console.log(fatiar)
fatiar = names.slice(1,-1)
console.log(fatiar)

const name1 = 'William Silva Lago'
const name2 = name1.split(' ')
console.log(name2)

const name3 = ['William', 'Silva','Lago']
const name4 = name3.join(' ')
console.log(name3)