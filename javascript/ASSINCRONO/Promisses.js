//PROMESSA

function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min)+min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
        if(typeof msg != 'string') reject('BAD VALUE')
        setTimeout(() => {
        resolve(msg)
        },tempo)
    });
}

esperaAi('Conexão com o BD',rand(1,3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando Dados', rand(1,3))
})//vem quando resolver o resolve
.then(resposta => {
    console.log(resposta)
    return esperaAi(12222, rand(1,3))
}).then(resposta => {
    console.log(resposta)
}).then(()=>{
    console.log('Dados sendo Exibidos')
})
.catch(e => {
    console.log('ERRO:',e)
})//vem quando resolver reject

// METODOS UTEIS PARA PROMISSES
// Promise.all 
// Promise.race
// Promise.resolve
// Promise.reject

function cheguei(msg, tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string') {
            reject('Caiu no Erro')
            return
        }
            setTimeout(() => {
                resolve(msg.toUpperCase() + ' - Passei na promise')
                return
            },tempo)
    });
}

const promises = [
    'Você tá no Race e depois vai pro All',
    cheguei('Promise 1',3000),
    cheguei('Promise 2',500),
    cheguei('Promise 3',1000),
    // cheguei(1000,1000),
];

Promise.all(promises) //Resolve Todas
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})

Promise.race(promises) //Entrega o primeiro Valor
.then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache')
        //resolve executa
    } else{
        return esperaAi('Baixei a página',3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))


function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Pagina em cache')
        //reject caso tem algum erro
    } else{
        return esperaAi('Baixei a página',3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO',e))










