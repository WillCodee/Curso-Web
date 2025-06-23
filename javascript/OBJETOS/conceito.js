const pessoa = {
    nome: 'Will',
    sobrenome: 'Lago'
};

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa['sobrenome'])
const chave = 'nome'
console.log(pessoa[chave])

//Construtora
const pessoa2 = new Object()
pessoa2.nome = 'Maria'
pessoa2.sobrenome = "Silva"
pessoa2.idade = 20
console.log(pessoa2.nome)

delete pessoa2.sobrenome
console.log(pessoa2)

pessoa2.falarNome = function(){
    console.log(`${this.nome} está falando seu nome`)
};
pessoa2.falarNome()

pessoa2.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa2.getDataNascimento())

for (let chave in pessoa2){
    console.log(chave,pessoa2[chave]);
}

//Factory functions
function criaPessoa(nome,sobrenome ){

    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Tony','Stark');
console.log(p1.nomeCompleto)

//Constructor functions
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

//new -> {criar um objeto vazio} / atrela a palavra this a esse obj 
const p2 = new Pessoa('Jesus','Cristo');
//p1 = (ENDEREÇO A MEMORIA) -> 'Valor'
//Variavel => Endereço => Valor
//Object.freeze(p1); //Travou o objeto
p2.nome = 'Gabriel'
const p3 = new Pessoa('Jonas','Bressan')
console.log(p2, p3)