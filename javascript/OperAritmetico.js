/*
Aritméticos: 
    + - * /
    ** -> potencia
    % -> resto da divisão
    Ordem de Precedência:
    ()
    **
    * / %
    + -
Incremento: ++
Decremento: --
*/

const num1 = 5;
const num2 = 10;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)
const a = 3;
const b = 2;
console.log(a**b)
const oper1 = 10;
const oper2 = 2;
console.log(oper1 % oper2)

// Operadores de atribuição
let contador =1;
contador++
console.log(contador)
contador--
console.log(contador)
contador +=2
console.log(contador)

const numero1 = 10;
// const numero2 = parseInt('5')
const numero2 = Number('5.2')
console.log(numero1+numero2)