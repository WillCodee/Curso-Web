const relogio = document.getElementById('relogio')
const iniciar = document.getElementById('iniciar')
const pausar = document.getElementById('pausar')
const zerar = document.getElementById('zerar')
let segundos = 0;
let timer

function iniciarRelogio(){
     timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000)
   
}

function getTimeSeconds(segundos){ //Pega os segundos e formata em forma de Hora
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC' //00:00:00
    });
}

document.addEventListener('click',function(e){
    console.log(e.target)
})

iniciar.addEventListener('click', function(){
    
    if(relogio.style.color === 'red'){
        relogio.style.color = 'black'
    }
    clearInterval(timer); // reseta caso tenha algum timer rodando (contenção pro zerar)
    iniciarRelogio()
  
})

pausar.addEventListener('click',function(){
    relogio.style.color = 'red'
    clearInterval(timer);

})

zerar.addEventListener('click',function(){
    if(relogio.style.color === 'red'){
        relogio.style.color = 'black'
    }
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00'

})



