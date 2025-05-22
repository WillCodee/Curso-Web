//Funções Construtora -> Objetos
//Função Fábrica ->  objetos
// Construtora -> Começa com Letra maiuscula - Pessoa (new)

function Pessoa(nome, sobrenome){
    const ID = 123456

    const metodoInterno = function(){
        
    };

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ':Sou um Método')
    };
    
};

const p1 = new Pessoa('William', 'Lago');
const p2 = new Pessoa('Maria','Reis')

console.log(p1.nome, p1.sobrenome)
p2.metodo()





