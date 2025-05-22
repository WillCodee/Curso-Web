//IIFE - > Immediately invoked function expression

(function qualquerCoisa(){
    const nome = 'will'
    console.log(nome)
})(); // Função que foi invocada imediatamente

const nome = 'willDaViola'
    console.log(nome)


    (function(idade, peso, altura){
        const sobrenome = 'Miranda'
        function criaNome(nome){
            return nome + '' + sobrenome
        }

        function falaNome(){
            console.log(criaNome('William'))
        }

        falaNome()
    })(19, 90, 1.80);

    // (function(){
    //     ...
    // })()