// let a = 'A'
// let b = 'B'
// let c = 'C'

// const letras = [b, c, a]

// [a, b, c] = letras;
// console.log(a, b, c)

//Desestruturação (do lado esquerdo do igual)
// [a, b, c] = [1, 2, 3]
//esta atribuindo para cada valor do array

// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a]; 

// [a, b, c] = letras;
// console.log(a, b, c); 



//////////EXEMPLO PRÁTICO//////////////////
//Índices        0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres, ,cinco] = numeros; //pulando numeros
//const [um,dois,tres] = numeros
console.log(um, tres, cinco )
// console.log(resto)

// ...rest (pegar o resto), ...spread (distribuir)

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numbers[1][2])