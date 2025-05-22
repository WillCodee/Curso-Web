//Escopo Lexico onde a fução conhece seu corpo e seus vizinhos
const nome = 'Will'

function falaNome(){
    //Ela se lembra onde foi declarada
    console.log(nome)
}

function usafalaNome(){
    const nome = 'DaViola'
falaNome()
}

usafalaNome()


