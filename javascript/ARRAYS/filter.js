//Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos,
//ou menos

//Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27]

function callbackFilter(valor){
    return valor > 10
}

// const numerosFiltrados = numeros.filter(function(valor, indice, array){
// });

let numerosFiltrados = numeros.filter(callbackFilter) //Filter vai executar essa função
console.log(numerosFiltrados)

//Um exemplo mais simples e modernos
numerosFiltrados = numeros.filter(valor => valor < 10 )
console.log(numerosFiltrados)


//Retorne as pessoas que tem o nome com 6 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNomeGrande = pessoas.filter((obj)=>{
    return obj.nome.length >= 6
});
console.log(pessoasNomeGrande)

const idadeMaior50 = pessoas.filter((obj)=> {
    return obj.idade > 50
});
console.log(idadeMaior50)

const TerminaComA  = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a')
});
console.log(TerminaComA)