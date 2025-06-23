// -> MAP -> Altera os valores e traz um array do mesmo tamanho que do Original

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 7, 8, 11, 15, 22, 27]

// const numerosEmDobro = numeros.map(function(valor, indice, array){
// });

const numerosEmDobro = numeros.map(valor => valor*2);
console.log(numerosEmDobro)


//Retorne uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const idades = pessoas.map((obj => ({idade: obj.idade})))
console.log(idades)

const comIDs = pessoas.map(function(obj, indice){
    // obj.id = (indice + 1) * 1
    const newObj = { ...obj };
    newObj.id = indice
    return newObj
});
console.log(comIDs)
console.log(pessoas)
