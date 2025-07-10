// const request = obj => {
//         return new Promise((resolve,reject)=>{
//             const xhr  = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true) 
//         //metodo , url , sincrono(true) ou assicrono(false)
//         xhr.send() //Se fosse um post, manda ai os dados do formulario
//         //send pedido sendo enviado

//         xhr.addEventListener('load', () =>{ //ele vai executar o que está dentro das chaves.
//             //Codigo de status entre 200 e 299 significa q esta tudo certo
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             } else{
//                 reject(xhr.status)
//             }
//         })
//         })
        
//     };

    document.addEventListener('click', e => {
        const el = e.target; //Qual elemento disparou um evento
        const tag = el.tagName.toLowerCase()

        if(tag === 'a'){
            e.preventDefault()
            carregaPagina(el);
        }
    });

     async function carregaPagina(el){
        try{
            const href = el.getAttribute('href')

        const response = await fetch(href)//Carregando o link
        if(response.status !== 200) throw new Error('ERRO 404!')
        const html = await response.text() //Pegando a resposta e converter em texto
        carregaResultado(html)

        }catch(e){
            console.log(e)
        }
        
    }

    function carregaResultado(response){
        const resultado = document.querySelector('.resultado')
        resultado.innerHTML = response
    }


fetch('pagina2.html')
.then(resposta => {
    if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO')
        return resposta.text()
})
.then( html => console.log(html))
.catch( e => console.error(e))



