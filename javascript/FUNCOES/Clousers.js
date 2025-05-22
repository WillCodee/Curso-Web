//Clousers é a habilidade que a função tem de acessar seu escopo lexico

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}


const funcao = retornaFuncao('Will')
console.dir(funcao())
//Essa função possui acesso a 3 escopos (O dela, da mãe dela e do Global)

const funcao2 = retornaFuncao('Maria')
console.dir(funcao2())