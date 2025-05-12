alert('Nossa Mensagem')
let confirmar = confirm('Deseja realmente apagar?')
console.log(confirmar)
prompt('Informe seu Nome')

// Exercicio

let num1 = prompt("Digite um Numero")
let num2 = prompt("Digite outro Numero")
let resultado = Number(num1)+Number(num2);
alert(`O resultado é ${resultado}`)

// Exercicios com variaveis

let varA= 'A'; //B
let varB= 'B'; //C
let varC = 'C'; //A

// const temp = varA;
// varA = varB //B
// varB = varC //C
// varC = temp

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)

