const nomes = ['Ana','Lucas','Bruna','Carlos','João']

for(let i=0; i <nomes.length; i++){
    console.log(`Olá ${nomes[i]}! Seja Ben-Vindo(a).`)
}

 console.log(' ############################# ')

function FizzBuzz(i){
    if(typeof i !== 'number'){
    return   i
    }
    if(i % 3==0 && i % 5==0){
     return   'FizzBuzz'
    }if(i % 3==0){
    return  'Fizz'
    }if(i % 5 == 0){
    return  'Buzz'
    }else{
     return  i
    }
    
 }

 console.log('a',FizzBuzz('a'))
  for(let i=0; i<=100;i++){
    console.log(i,FizzBuzz(i))
  }

  console.log(' ############################# ')

const frutas = ['maçã', 'banana', 'uva', 'laranja', 'pera', 'morango']

for(let i of frutas){
    console.log(i)
}

 console.log(' ############################# ')

 const notas = [7.5, 8.0, 6.5, 9.0]
let total=0
 for(let i of notas){
    total += i
 }
 console.log(total)

  console.log(' ############################# ')

  const produto = {
    nome: 'Teclado',
    preco: 150,
    categoria:'Periféricos'
  }

  for(let i in produto){
    console.log(produto[i])
  }

    console.log(' ############################# ')

    const nomes2 = ['Rafaela','Marcos','Tiago','Luiz','William','Caio']
    for(let i in nomes2){
        console.log(i)
    }