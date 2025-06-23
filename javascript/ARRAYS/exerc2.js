//Filtre os produtos com preço acima de R$50,00.
//Aplique um desconto de 10% em cada um deles.
//Calcule o valor total final dos produtos com desconto.

const produtos = [
    {"nome": "Camiseta","preco": 49.90},
    {"nome": "Calça","preco": 120.00},
    {"nome": "Boné","preco": 35.00},
    {"nome": "Tênis","preco": 300.00}
]

const Acimade50 = produtos
.filter( valor => valor.preco > 50)
.map(valor => valor.preco - (valor.preco *(10/100)))
.reduce(function (ac,vlr){
    return ac += vlr 
})
console.log(Acimade50)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

const multiplos3e5 = numeros.filter(function (vlr){
    if(vlr % 3 === 0 && vlr % 5 === 0){
        return vlr
    }
})
console.log(multiplos3e5)

const tempCelsius = [15.38, 22, 30.18, 18, 25, 10.09, 35, 28, 20, 5.24];
const tempFahrenheit = tempCelsius.map(function(vlr){
    let F
    F = (vlr*1.8) + 32
    return F
})
console.log(tempFahrenheit)

const numbers = [11,2,34,546,98,0,-5090,1234,999,5]
const MaiorNumber = numbers.reduce(function(ac,vlr){
    if(ac > vlr){
        return ac
    }else{
        return vlr
    }
})
console.log(MaiorNumber)

//forEach

const nums = [5, 10, 15, 20, 25];
let total = 0
nums.forEach((vlr) => total += vlr)
console.log(total)

let nome
const nomes = ["Ana", "Carlos", "Beatriz", "João"];

function saudacoes(element){
    console.log(`Olá, ${element}! Seja bem-vindo(a)`)
}
nomes.forEach(saudacoes)

const numerosAgain = [2, 4, 6, 8];
const DobroNumeros = []
numerosAgain.forEach((vlr) => DobroNumeros.push(vlr*2))
console.log(DobroNumeros)