const inputTarefa = document.getElementById('input-tarefa')
const btnTarefa = document.getElementById('btn-tarefa')
const tarefa = document.getElementById('tarefa')

function criaLi(){
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.key === "Enter"){
       if(!inputTarefa.value) return
   criaTarefa(inputTarefa.value)
    }
    // console.log(e)
}) //tecla pressionada

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class','apagar')
    botaoApagar.setAttribute('title','apagar essa tarefa')
    li.appendChild(botaoApagar)
}

document.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function criaTarefa(texto){
    const li = criaLi();
    li.innerText = texto
    tarefa.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return
   criaTarefa(inputTarefa.value)
})

function salvarTarefas(){
    const liTaredas = tarefa.querySelectorAll('li')
    const listadeTarefas = []

    for (let tarefa of liTaredas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listadeTarefas.push(tarefaTexto)
        
    }
    const tarefasJSON = JSON.stringify(listadeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}



function adicionaTaredasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas)
    for (let tarefa of listadeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTaredasSalvas()