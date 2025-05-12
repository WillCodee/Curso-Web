function saudacao(nome){ //parametros são como variaveis
    return `Bom Dia ${nome}`; //A função retorna isso
}
const variavel = saudacao('William')
console.log(variavel)
// saudacao('William');
// saudacao('Maria');
//Funçã0 Reutilizavel


function soma(x=0,y=0){ //pode definir um valo padrão
    const resultado = x+y;
    return resultado;
}

console.log(soma())
console.log(soma(3,5))
console.log(soma(2,8))

function subtracao(x,y){
    const resultado = x-y
    return resultado;
}
console.log(subtracao(8,4))
console.log(subtracao(5,3))

const raiz = function(n){//função anonima
    return n ** 0.5;
};

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))

const quadrada = (n) =>{ //arrow function
    return n **2
}

// const quadrada =n => n**2

console.log(quadrada(3))