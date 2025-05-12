// for (let i=0; i<=5; i++) {
//     console.log('Linha',i)
// }

// for (let j=0; j<=500; j+=10) {
//     console.log('Linha',j)
// }

// for (let n=500; n >=400; n-=10) {
//     console.log('Linha',n)
// }

// for (let i=0; i<=10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar'
//     console.log(i, par)
// }

// const frutas = ['Maçã', 'Pêra', 'Uva','Banana','Laranja','Morango']

// for (let i=0; i < frutas.length; i++) {
//     console.log(`Índice ${i}`,frutas[i])
// }

//FOR IN
//Ler os indices(array) ou chaves do objeto

const frutas = ['Pera','Maçã','Uva','Goiaba']
for (let i in frutas){
    console.log(i,frutas[i])
}

const pessoa = {
    nome: 'William',
    sobrenome: 'Lago',
    idade: 18
};

for (let chave in pessoa){
    console.log(chave,pessoa[chave])
}

//FOR OF
//Faz iteraão dos valores

const nome = ['William','Silva', 'Lago']
// for (let i=0; i<nome.length; i++){
//     console.log(nome[i])
// }

for (let valor of nome){
    console.log(valor)
}

console.log('######')
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})