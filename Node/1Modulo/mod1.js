const nome = 'Luiz'
const sobrenome = 'Miranda'

const falaNome = () => nome + ' ' + sobrenome

//exports é do node

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// exports.Nome = nome
// exports.Sobrenome = sobrenome
// exports.FalaNome = falaNome
// this.qualquercoisa = 'O que eu quiser exportar'
// exports.idade = 19
// console.log(exports)


class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

exports.Pessoa = Pessoa

exports = {
Nome,
Sobrenome,
Pessoa
}
console.log(exports)