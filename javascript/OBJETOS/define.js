//defineProperty (Getter e Setter) - defineProperties
function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Faz o valor aparecer normalmente ao ser executado
        value: estoque, //valor
        writable: false, //Diz se o valor pode ser alterado
        configurable: false //diz se pode configurar a chave
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // Faz o valor aparecer normalmente ao ser executado
        value: nome, //valor
        writable: true, //Diz se o valor pode ser alterado
        configurable: true //diz se pode configurar a chave
        },
        preco: {
        enumerable: true, // Faz o valor aparecer normalmente ao ser executado
        value: preco, //valor
        writable: true, //Diz se o valor pode ser alterado
        configurable: true //diz se pode configurar a chave
        },
    });
}


const p1 = new Produto('Camiseta',20,3)
p1.estoque = 50000
console.log(p1)
console.log(Object.keys(p1)); //Chaves

for(let chave in p1){
    console.log(chave)
}

//Trabalhando com Getter e Setter


function Produtoo(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // Faz o valor aparecer normalmente ao ser executado
        configurable: false, //diz se pode configurar a chave
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Bad Value')
            }
            console.log(valor)
        }
    });
}

const p2 = new Produtoo('Casaco',30,5)
console.log(p2)
p2.estoque = 50


function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa','')
            nome = valor;
        }
    };
}

const p3 = criaProduto('Calça')
p3.nome = "Qualquer coisa"
console.log(p3.nome)
