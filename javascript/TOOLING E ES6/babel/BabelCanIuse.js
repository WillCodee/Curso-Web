//Babel e "Can i use..."
//npm init -y
//npm install  @babel/cli @babel/preset-env @babel/core
//npm install --save-dev @babel/cli @babel/preset-env @babel/core

const nome = 'Luiz'
const obj = {nome}
const novoObj = {...obj}
console.log(novoObj)

//npx babel BabelCanIuse.js -o bundle.js --presets=@babel/env
//Cria uma projeto  convertido para babel

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


















