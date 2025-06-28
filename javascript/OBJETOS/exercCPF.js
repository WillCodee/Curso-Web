const cpf = '070.987.720'
// - 03
//11 - (237 % 11) = 5 (Primeiro dígito)

//Retirando tudo que não for um número
let numCpf = cpf.replace(/\D+/g,'')

//Transformando todos os números em um Array
let cpfArray = Array.from(numCpf)
console.log(cpfArray)

let i=10;
// const priDigito = 11 - (Digito1 % 11)
const Digito1 = cpfArray.reduce((ac,val) => 
    ac + Number(val) * (i--)
,0);
 console.log(Digito1)
//11 - (284 % 11) = 2 (Primeiro dígito)
let i2 =11
const Digito2 = cpfArray.reduce((ac,val) => 
    ac + Number(val) * (i2--)
,0);
 console.log(Digito2)


function Digito(num){
    let valor = 11 - (num % 11)
    if(valor > 9){
        valor = 0
    }
    return valor
}

const PriDigito = Digito(Digito1)
const SegDigito = Digito(Digito2)
console.log(PriDigito,SegDigito)


const validador = cpf.concat("-"+PriDigito,SegDigito)
console.log( typeof validador, validador)



//////////////////////////////////////////////////////////
//VERSÃO DO CURSO
console.log('########################################################')

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0,-2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    const novoCPF = cpfParcial + digito1 + digito2
    return novoCPF === this.cpfLimpo;
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia=  this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    let total = cpfArray.reduce((ac,val) => {
        ac += (regressivo * Number(val))
        regressivo--;
        return ac
    },0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito)
}

const cpf2 = new ValidaCPF('705.484.450-52')

if(cpf2.valida()){
    console.log('Cpf válido')
}else{
    console.log('Cpf inválido')
}








