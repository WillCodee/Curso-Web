//Juntando Filter + Map + Reduce
//Retorne a soma do dobro de todos os pares
// => Filtrar pares
// => Dobrar os valores
// => Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];

const numerosPares = numeros
.filter(valor =>  valor % 2 === 0) //Pega os numeros pares
.map(valor => valor * 2) // Dobra esses numeros pares
.reduce((ac, valor) => ac + valor) // Soma tudo
console.log(numerosPares)

