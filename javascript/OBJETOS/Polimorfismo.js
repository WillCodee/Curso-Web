//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
};


Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c:${this.agencia}/${this.conta} ` + `Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11, 22, 10)
conta1.depositar(11)
conta1.depositar(10)
conta1.sacar(30)
conta1.sacar(2)

console.log('####################')

function contaCorrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia,conta,saldo)
    this.limite = limite
}
contaCorrente.prototype = Object.create(Conta.prototype)
contaCorrente.prototype.constructor = contaCorrente



contaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }

    this.saldo -= valor
    this.verSaldo()
};

const cc = new contaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(10)

console.log('####################')

function contaPoupanca(agencia,conta,saldo,limite){
    Conta.call(this, agencia,conta,saldo)
    this.limite = limite
}
contaPoupanca.prototype = Object.create(Conta.prototype)
contaPoupanca.prototype.constructor = contaPoupanca

const cp = new contaPoupanca(12, 33, 0, 100)
cp.depositar(10)
cp.sacar(10)
cp.sacar(1)