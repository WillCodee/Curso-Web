const relogio = document.getElementById('relogio')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')
let segundos = 0;
let timer;

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = getSeconds(segundos)
    },1000)
}


function getSeconds(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC' //00:00:00
    })
}


iniciar.addEventListener('click',function(e){
     if(relogio.style.color === 'red'){
        relogio.style.color = 'black'
    }

    clearInterval(timer)
    iniciarRelogio()
})

pausar.addEventListener('click',function(){
        relogio.style.color = 'red'
        clearInterval(timer)
})

zerar.addEventListener('click',function(e){
     if(relogio.style.color === 'red'){
        relogio.style.color = 'black'
    }
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = '00:00:00'
})