//Produto -> aumento, desconto
//Camiseta = Cor, Caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco); //Chama o Pai
    this.cor = cor // Pode-se criar mais coisas
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta; //Torna ele o Construtor real
//Antes o construtor era Produto agora é camiseta

Camiseta.prototype.aumento = function(percent){
   this.preco = this.preco + (this.preco * (percent/100))
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(100)
console.log(camiseta)

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material,

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor != 'number') return
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
Caneca.prototype.desconto = function(percent){
    this.preco = this.preco - (this.preco * (percent/100))
}

const caneca = new Caneca('Cerveja', 12, 'Vidro', 5)
caneca.desconto(5)
console.log(caneca)
console.log(caneca.estoque)


