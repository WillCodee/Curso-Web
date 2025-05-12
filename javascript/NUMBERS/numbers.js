let num1 = 10;
let num2 = 2.5;
let num3 = 1200;
let num4 = 10.234623664;

console.log(num1+num2)
console.log(num1.toString()+num2)//converte para string, assim ao invez de soma ocorre a concatenação
// num1 = num1.toString(); //O torna uma string
console.log(num3.toString(2))  //representação binária
console.log(num4.toFixed(2))  //casas decimais
console.log(Number.isInteger(num1)) //verifica se é inteiro, valor boolean

let temp = num1*'oi'
console.log(Number.isNaN(temp)) //verifica se é um NaN

// IEEE 754-2008
num1 = 0.7
num2 = 0.1

// num1+=num2 //0.8
// num1+=num2 //0.9
// num1+=num2 //1.0
// num1 += num2
// console.log(num1.toFixed(1))

num1 = (( num1* 100 ) + ( num2 * 100 ) ) / 100;

console.log(num1)


