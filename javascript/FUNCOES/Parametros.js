//arguments sustenta os valores que não tem parametro
//Só acontece com function

// function funcao(){
//     let total = 0
//     for( let argumento of arguments){
//         total += argumento
//     }
//     console.log(total)
// }
// funcao( 1,2 ,3,4,5,6,7)

// function funcao(a,b,c,d,s,e,f){
//     console.log(a,b,c,d,s,e,f)
// }
// funcao( 1,2 ,3)

// function funcao(a,b=1, c=5){
//     console.log(a+b+c)
// }
// funcao(3, undefined ,20)

function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao({nome:'will', sobrenome:'daViola' ,idade:19})
//para array é o mesmo []



const conta = function(operador, acumulador, ...numeros){
   for(let numero of numeros){
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '/') acumulador /= numero
    if (operador === '*') acumulador *= numero
   }
   console.log(acumulador)
};

conta('+', 1, 20, 30, 40, 50)

const contas = (...args) =>{
    console.log(args)
}
contas('-', 1, 20, 30, 40, 50)