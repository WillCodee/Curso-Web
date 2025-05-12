const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {

    if(numero === 2){
        console.log('Pulei o 2')
        continue;
        //O 2 não será exibido (ele pula) e o codigo continua
    }

    if(numero === 7){
        console.log('Parei no 7')
        break; //Para a execução do codigo
    }

    console.log(numero)
    
}

console.log(' ########')

let i = 0;
while (i < numeros.length){
    let numero = numeros[i]

    if(numero === 2){
        console.log('Pulei o 2')
        i++;
        continue;
    }

    if(numero === 7){
        console.log('Pulei o 7')
        i++;
        break;
    }

    i++
}

