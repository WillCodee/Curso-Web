//                -5     4-       3-       -2       -1  
//                0      1        2         3        4 
const nomes = ['Maria','João','Eduardo','Gabriel','Júlia']

//nomes.splice(indice, delete, elem1, elem2)
//pop -> remove o ultimo elemento
//push-> colocar um elemento na ultima posição

// let removidos = nomes.splice(4,1)
// console.log(nomes, removidos)

// let removidos = nomes.splice(3,2)
// console.log(nomes, removidos)

// let removidos = nomes.splice(-2,1)
// console.log(nomes, removidos)

// let removidos = nomes.splice(-2,Number.MAX_VALUE) //Vai até o ultimo elem
// console.log(nomes, removidos)

// let colocar = nomes.splice(3, 0, 'William')
// console.log(nomes,colocar)

// let trocar = nomes.splice(3,1,'Luiz')
// console.log(nomes,trocar)

// let trocar = nomes.splice(3,2,'Luiz', 'Otavio')
// console.log(nomes,trocar)

// //shift -> remove o primeiro
// let removidos = nomes.splice(0,1)
// console.log(nomes,removidos)

//push -> adiciona um elemento ao final
let colocar = nomes.splice(5,0, 'Sofia')
console.log(nomes,colocar)

//unshift -> adiciona um elemento ao inicio
colocar = nomes.splice(0,0,'Matheus')
console.log(nomes,colocar)
