


function Cadastrar(){
    const form = document.getElementById('form')
    const exibir = document.getElementById('exibir')

    const produtos = [];

    function criarProdutos(e){
        e.preventDefault();

        const nome = document.getElementById('nome')
        const preco = document.getElementById('preco')
        const descricao = document.getElementById('descricao')

        produtos.push({
            nome: nome.value,
            preco: preco.value,
            descricao: descricao.value
        })
        
        exibir.innerHTML += `${nome.value}: ${preco.value} <br />
        ${descricao.value} <br /> <br />`


    }

    form.addEventListener('submit', criarProdutos)
}

Cadastrar()