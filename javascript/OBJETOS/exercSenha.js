function ValidarSenha(SenhaEnviada){
    Object.defineProperty(this, 'senhaLimpa',{
        get: function(){
            return SenhaEnviada.trim()
        }
    });
}

ValidarSenha.prototype.valida = function(){
    if(typeof this.senhaLimpa === 'undefined'){
        return false
    }
    if(!this.tamanhoValido()){
        return false
    }
    if(!this.temLetraMaiuscula()){
        return false
    }
    if(!this.temNumero()){
        return false
    }
    if(this.temEspaco()){
        return false
    }

    return true;
};

ValidarSenha.prototype.tamanhoValido = function(){
    return this.senhaLimpa.length >= 8 && this.senhaLimpa.length <= 16
}

ValidarSenha.prototype.temLetraMaiuscula = function(){
    return /[A-Z]/.test(this.senhaLimpa)
}

ValidarSenha.prototype.temNumero = function(){
    return /\d/.test(this.senhaLimpa)
}


ValidarSenha.prototype.temEspaco = function(){
    return /\s/.test(this.senhaLimpa)
}


const senha = new ValidarSenha('123456Wl')

if(senha.valida()){
    console.log('Senha Correta')
}else{
    console.log('Senha Incorreta')
}


///////////////////////////////////////////////////////////
console.log('###########################################################################')


function Pessoa(nome,idade){
    this.nome = nome,
    this.idade = idade,

    Object.defineProperty(this, 'nomeMaisculo',{
        get: function(){
            return this.nome.toUpperCase()
        }
    });
}

Pessoa.prototype.apresentar = function(){
    console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} anos`)
}

function Aluno(nome,idade,matricula,curso){
    Pessoa.call(this, nome,idade),
    this.matricula = matricula,
    this.curso = curso
}

Aluno.prototype = Object.create(Pessoa.prototype)
Aluno.prototype.construtor = Aluno

Aluno.prototype.apresentar = function(){
    console.log(`Olá eu sou ${this.nome} tenho ${this.idade} minha matricula é 
    ${this.matricula} e sou do curso ${this.curso}`)
}

const p1 = new Pessoa('William',19)
p1.apresentar()

const a1 = new Aluno('Maria',20,124325,'Psicologia')
a1.apresentar()

function Professor(nome,idade,siape,disciplina){
    Pessoa.call(this,nome,idade),
    this.siape=siape,
    this.disciplina=disciplina
}

Professor.prototype = Object.create(Pessoa.prototype)
Professor.prototype.constructor = Professor

Professor.prototype.apresentar = function(){
    console.log(`Olá eu sou ${this.nome} tenho ${this.idade} anos minha siape é 
        ${this.siape} e minha disciplina é ${this.disciplina}`)
}

const pr1 = new Professor('Marcos',35,542131,'Interfaces')
pr1.apresentar()

console.log(p1.nomeMaisculo)
console.log(a1.nomeMaisculo)
console.log(pr1.nomeMaisculo)

///////////////////////////////////////////////////////////
console.log('###########################################################################')

function Produto(nome,preco){
    this.nome = nome,
    this.preco = preco

    Object.defineProperty(this, 'nomeMaiusculo',{
        get: function(){
            return `${this.nome.toUpperCase()}`
        }
    });

    Object.defineProperty(this, 'nome',{
            enumerable: true,
            value:nome,
            writable:false,
            configurable:false
    });

    Object.defineProperty(this, 'preco',{
        enumerable: true,
        value:preco,
        writable: false,
        configurable: false
    })
}

Produto.prototype.exibir = function(){
    console.log(`Produto: ${this.nome} - Preço: R$${this.preco}`)
}

const pt1 = new Produto('Teclado',300)
const pt2 = new Produto('Mouse',120)
pt1.exibir()
pt2.exibir()

console.log(pt1.nomeMaiusculo)
console.log(pt2.nomeMaiusculo)
