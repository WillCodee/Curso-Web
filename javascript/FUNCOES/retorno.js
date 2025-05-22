function soma(a,b){
    return a + b
}
console.log(soma(2,4))

function soma2(a,b){
    console.log(a+b)
}

function falaFrase(comeco){
    function falaResto(resto){
        return comeco +' '+resto
    }
    return falaResto 
}
const fala = falaFrase('Ola')
const resto = fala('Mundo!')
console.log(resto)

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}


const duplica= criaMultiplicador(2)
const triplica= criaMultiplicador(3)
const quadriplica=criaMultiplicador(4)

console.log(duplica(3))
console.log(triplica(4))
console.log(quadriplica(10))