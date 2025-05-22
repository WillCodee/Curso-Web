const inputTarefa = document.getElementById('input-tarefa')
const btnTarefa = document.getElementById( 'btn-tarefa')
const tarefa = document.getElementById('tarefa')

function criaLi(){
    const li = document.createElement('li') //vai criar uma tag li
    return li
}

function limparInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

inputTarefa.addEventListener('keypress',function(e){
    if(e.key === "Enter"){
        if(!inputTarefa.value){
            return criaTarefa(inputTarefa.value)
        }
     }
})

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar  = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class','apagar') // classe apagar
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
    const li = criaLi()
    li.innerText = texto
    tarefa.appendChild(li) //Vai criar li dentro da div #tarefa
    limparInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.vallue){
        return criaTarefa(inputTarefa.value)
    }
})

function salvarTarefas(){
    const liTarefas = tarefa.querySelectorAll('li')
    const listadeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()//remove espaços
        listadeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listadeTarefas)
    localStorage.setItem('tarefas',tarefasJSON)
}


function AdicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listadeTarefas = JSON.parse(tarefas)
    for(let tarefa of listadeTarefas){
        criaTarefa(tarefa)
    }
}

AdicionarTarefasSalvas()

