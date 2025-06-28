// function criaPessoa(nome, sobrenome){
//     const pessoaPrototype ={
//         falar(){
//             console.log(`${this.nome} está falando`)
//         },
//         comer(){
//             console.log(`${this.nome} está comendo`)
//         },
//         beber(){
//             console.log(`${this.nome} está bebendo`)
//         },
//     };

//     return Object.create(pessoaPrototype, {
//             nome: {value: nome},
//             sobrenome: {value: sobrenome}
//         });
// }

// const p1 = criaPessoa('Will','Lago')
// console.log(p1)
// p1.falar()

       const falar = {
        falar(){
            console.log(`${this.nome} está falando`)
        }
       }
       
        const comer = {
        comer(){
            console.log(`${this.nome} está comendo`)
        }
       }

       const beber = {
        beber(){
            console.log(`${this.nome} está bebendo`)
        }
       }

const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome){
      return Object.create(pessoaPrototype, {
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        });
}

const p1 = criaPessoa('Will','Lago')
console.log(p1)
p1.falar()

