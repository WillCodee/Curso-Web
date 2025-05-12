const pessoa = {
    nome: 'Will',
    sobrenome: 'Lago',
    idade: 30,
    endereco:{
        rua: 'Rua da Ilha',
        numero: 15
    }
};

console.log(pessoa)

//Atribuição normal
// const nome = pessoa.nome
// console.log(nome)

// Atribuição via Desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome)

//Os Testes abaixo serão realizados caso a variavel nome não exista no objeto

//valor padrão (caso alguma vlaor não exista)
// const { nome= 'não existe', sobrenome } = pessoa;
// console.log(nome, sobrenome)

//Atribuir outro valor para um objeto inexistente
// const { nome: n= 'Willdaviola', sobrenome } = pessoa;
// console.log(n, sobrenome)

// const { endereco: {rua, numero}} = pessoa;
// console.log(rua, numero)

// const { nome, ...resto} = pessoa;
// console.log(nome, resto)