/*
Primitivos (imutáveis) - string,number,boolea, undefined
null (biginh, symbol) - Valores Copiados

Referência (mutável) - arrays, object, function - Passados por Referência
*/

// Exemplos de Primitivos (imutáveis)
//        0123
let nome='Luiz'
nome[0]='R' //Não troca o L pelo R
console.log(nome[0],nome)

let x = 'A' //copia
let y = x
x = 'outra coisa'
console.log(x,y)

// Exemplos de Valores por Referência (mutável)

let a = [1,2,3];
let b = a;
//let b = [...a] //para copiar um array dentro de a
let c=b
a.push(4)
console.log(a,b)

b.pop()
console.log(a,b)

a.push('Will')
console.log(c)