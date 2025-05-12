function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}

console.log(mostraHora())

const timer = setInterval(function(){
    console.log(mostraHora()) //Função anonima + tempo
}, 1000) 
//Configura um serto intervalo 
// de tempo para que a função seja executada

setTimeout(function(){
    clearInterval(timer); //Executa uma vez em um determinado tempo
},3000)


setTimeout(function(){
    console.log('Pegou Will');
},5000)

