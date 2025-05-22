// let  num = Number(prompt('Digite um número'))
// let total = 0

// while(num > 0){
//     total += num
//    num = Number(prompt('Digite um Número'))
// }

// console.log(total)

console.log('##############################')

// const senha = '1234'

// let verificarSenha = prompt('Informe a Senha')
// let i=0
// const tentativasMaximas = 3


//     while(verificarSenha !== senha && i< tentativasMaximas){
//         verificarSenha = prompt(`Senha Incorreta, você tem ${tentativasMaximas - i} Tentativas:`)
//         i++
//     }
//     if(verificarSenha === senha){
//         alert('Acesso concedido!')
        
//     }else{
//     alert('Acesso Bloqueado!')
//     }


console.log('##############################')

// let numero = Number(prompt('Digite um Número'))
// let par = 0
// let impar = 0

// while(numero !== 0){
//     numero = Number(prompt('Digite um Número'))
//   if(numero % 2 == 0){
//         par++
//     }else{
//         impar++
//     }
// }

// alert(`Números: ${par} e Números: ${impar}`)

console.log('##############################')

let oper = Number(prompt('Digite uma operação'));

do{
    console.log('1.Ver Data Atual')
    console.log('2.Dizer Olá')
    console.log('3.Sair')
}while(oper !== 3)