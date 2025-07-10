class ControleRemoto {
    constructor(tv){
        this.tv = tv, 
        this.volume = 0
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume(){
        this.volume -= 2
    }

    //Método estático
    //Não tem acesso aos dados da instância
    //Aponta para a classe
    static soma(x,y){
        return x + y
    }

}

const c1 = new ControleRemoto('LG')
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
console.log(ControleRemoto.soma(5,4))
console.log(c1)
