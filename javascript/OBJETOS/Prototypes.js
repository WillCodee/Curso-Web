//Construtora -> molde (classe)
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: '+ this.nome + ' ' + this.sobrenome
}

//instância
const pessoa1 = new Pessoa('Luiz','Oliveira'); // Pessoa = Função Construtura
const pessoa2 = new Pessoa('Maria','Antonieta'); // Pessoa = Função Construtura
const data = new Date(); // <-- Date= Função Construtora

//proto =
Pessoa.prototype.estouAqui = "HaHahahahaha"
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + '' + this.sobrenome
}

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);

//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype
};

const objB = {
    chaveB: 'B'
    //_proto_: objA
};

const objC = new Object();
objC.chave = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB)


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percent){
    this.preco = this.preco - (this.preco * (percent/100))
}

Produto.prototype.aumento = function(percent){
   this.preco = this.preco + (this.preco * (percent/100))
}

const p1 = new Produto('Camisa',50);
// p1.desconto(100)
console.log(p1)
p1.aumento(100)
console.log(p1)

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2)

//const p3 = Object.create(Object.prototype)
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
         writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});
p3.aumento(10)
console.log(p3)