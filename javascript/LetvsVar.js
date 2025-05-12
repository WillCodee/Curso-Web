// PRIMEIRA DIFERENÇA ENTRE LET E VAR
var nome = 'Will'
var nome = 'da Viola'
// vai passar
// ECMAscript é a padroniuzação do javascript
let nome ='will'
let nome= 'da Viola'
// vai dizer que a variavel já foi definida


//SEGUNDA DIFERENÇA

//lET TEM ESCOPO DE BLOCO {... BLOCO}
// VAR só tem escopo de função

let name = 'will'
var name2 = 'will'

const verdade = true;
if(verdade){
    let name = 'Lago' //Criando
    var name2 = 'Ronaldo' //redeclarando
    console.log(name, name2)
}

console.log(teste1, teste2)

let teste1 = 'teste let'
var teste2 ='teste var'