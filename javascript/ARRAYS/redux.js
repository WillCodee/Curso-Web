//Redux
//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores(Map)

// const total = numeros.reduce(function(acumulador, valor, indice, array){
// });

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador,valor){
    acumulador += valor
    return acumulador
},0); //valor inicial do acumulador
console.log(total)

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, []); //valor inicial do acumulador
console.log(pares)

const dobro = numeros.reduce(function(acumulador,valor){
    acumulador.push(valor * 2)
    return acumulador
}, []) //valor inicial do acumulador
console.log(dobro)


const TotalPar = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0){
        acumulador += valor
    }
    return acumulador
}, 0) //valor inicial do acumulador
console.log(TotalPar)

//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const MaisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade){
       return acumulador 
    }
    return valor
});
console.log(MaisVelha)

//o acumulador guarda o resultado parcial ao longo das iterações,
//É a variável que armazena o resultado da operação em cada iteração. 
// enquanto o valor representa cada item do array que está sendo 
// manipulado.
