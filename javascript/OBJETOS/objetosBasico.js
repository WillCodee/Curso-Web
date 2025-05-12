// const pessoa1 = {
//     nome: 'William',
//     sobrenome: 'Lago',
//     idade:25
// };
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);


function criaPessoa(nome,sobrenome,idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// function criaPessoa(nome,sobrenome,idade){
//     return{nome,sobrenome,idade};
// }

const pessoa1 = criaPessoa('William','Lago',18) //Argumentos
const pessoa2 = criaPessoa('Maria','Silva',30)
const pessoa3 = criaPessoa('Carlos','Eduardo',25)

console.log(pessoa1.nome, pessoa2.nome)


const pessoa = {
    nome: 'Silvia',
    sobrenome: 'Santos',
    idade: 50,

    fala(){
        console.log(`Olá eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade}`)//this quer dizer (este elemento)
    },
    maisidade(){
        ++this.idade
    }
}

pessoa.fala()
pessoa.maisidade()
pessoa.fala()
pessoa.maisidade()
pessoa.fala()
pessoa.maisidade()
pessoa.fala()