//Hosting
falaOi()

function falaOi(){
    console.log('Oie')
}

//Objetos de primeira Classe
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.')
};
souUmDado();

//Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function')
}
funcaoArrow()

//Dentro de um objeto
const obj = {
    falar() {
        console.log('Falando...')
    }
}

obj.falar()