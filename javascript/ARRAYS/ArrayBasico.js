
//                  0        1       2
const alunos = ['William','Maria','Luiz'];
console.log(alunos)
console.log(alunos[1]) //mostra o indice do array
console.log(alunos[2])

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
console.log(alunos instanceof Array) //É um Array