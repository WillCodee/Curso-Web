/*
William Silva Lago tem 19 anos, 
pesa 84kg tem 1.8 de altura e 
seu IMC é de 25.837968650438
William Lago nasceu em 2006
*/
let nome ='William Silva';
let sobrenome = 'Lago'
let idade = 19;
const peso = 90;
const altura = 1.80;
let imc; // peso/(altura*altura)
let anoNascimento;

imc = peso/(altura*altura)
anoNascimento = 2025 - idade
console.log(`${nome} ${sobrenome} tem ${idade} anos, 
pesa ${peso}kg tem ${1.8} de altura e seu IMC é de ${imc}
${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
