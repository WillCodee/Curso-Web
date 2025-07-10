//ASYNC / AWAIT

function rand(min=0, max=3){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min)+min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(typeof msg !== 'string') {
                    reject('Caiu no Erro')
                    return
                }
                resolve(msg.toUpperCase() + ' - Passei na promise')
                return
            },tempo)
    });
}


// esperaAi('Fase 1', rand(0,3))
//     .then(valor =>{
//          console.log(valor)
//          return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('Fase 3',rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase
//     }).then( fase => {
//         console.log('Terminamos na Fase: ',fase)
//     })
//     .catch(e => console.log(e))

async function executa(){
    try{
    const fase1 =  esperaAi('Fase 1', 1000)
    console.log(fase1)

        setTimeout(function(){
            console.log('Esta Promise estava pendente', fase1)
        },1100)

    const fase2 = await esperaAi('Fase 2', rand())
    console.log(fase2)

    const fase3 = await esperaAi('Fase 3', rand())
    console.log(fase3)

    console.log('Terminamos na Fase: ',fase3)
    }catch(e){
        console.log(e)
    }
}
executa()
//Estados da Promisse
// pending -> pendente
//fullfield -> resolvida
//rejected -> rejeitada


// Em programação, algo assíncrono não acontece imediatamente; 
// ele fica “pendente” até terminar.
// Exemplo comum: fazer uma requisição para um servidor (como buscar dados de uma API) 
// demora um tempo — e o programa não pode ficar "travado" esperando.

// Usar async antes de uma função faz com que ela sempre retorne uma Promise.

// Dentro dessa função, você pode usar await para "pausar" até que uma promessa se resolva.












