// Escreva uma função que recebe 2  números 
// e retorne o maior deles

//const num1 = prompt('Informe um Numero: ')
//const num2 = prompt('Informe outro Numero: ')
const MaiorValor = EncontrarValor(70,12)
console.log(MaiorValor)

function EncontrarValor(num1,num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }

    
}

const max2 = (x,y) => {
    return x > y ? x : y;
}

console.log(max2(34,80))

console.log('############################################################')
//Escreva uma função chamada ePaisagem que 
// recebe dois argumentos, largura e altura
//de uma imagem (number).
// Retorne true se a imagem estiver no modo
// Paisagem

function ePaisagem(larg,alt){
    const retrato = larg > alt ? true : false
    return retrato
}

console.log(ePaisagem(1200,1080))

console.log('############################################################')
//Escreva uma função que recebe um número e 
// retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número Não é divisivel por 3 e por 5 
// = retorna o próprio número
// Checar se o número é realmente um número
// = Retorna o próprio número
// Use a função com números de 0 a 100

function FizzBuzz(num){
    
        
        if(typeof num !== 'number'){
            return num
        } if( num % 3 === 0 && num % 5 === 0){
            return 'FizzBuzz'
        } if( num % 5 === 0 ){
            return 'Buzz'
        } if(num % 3 === 0 ){
            return 'Fizz'
        }else{
            return num
        }
    
}
console.log('a', FizzBuzz('a'))
for (let i =0; i<=100; i++){
    console.log(i, FizzBuzz(i))
}