function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')//fatiar
            this.nome = valor.shift() //vai fatiar o nome
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala: function(assunto=' falando NADA'){
            return`${this.nome} está ${assunto}.`
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc(){//o get vai fazer ele fingit ser um atributo
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
        
    };
}
//this se refere ao que foi definido na function

// const p1 = criaPessoa('Luiz','Otavio',1.8, 80)
// console.log(p1.fala('Falando sobre JS'))
// const p2 = criaPessoa('Maria','DUda',1.6,42)
// console.log(p2.fala('Falando sobre CSS'))
// console.log(p1.imc)
// console.log(p2.imc)

const p1 = criaPessoa('Lionel', 'Messi', 1.8, 80)
const p2 = criaPessoa('João', 'Otavio', 1.9, 57)
const p3 = criaPessoa('Lionel', 'Messi', 1.5, 110)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)