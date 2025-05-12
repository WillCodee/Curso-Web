//const data = new Date(0); 01/01/1970 Timestamp unix ou époxa unix 

// const tresHoras = 60 * 60 * 3 * 1000;

// const data = new Date(0 + tresHoras);
// console.log(data.toString())


const data = new Date(2019,3,20,15, 4, 27, 500);
// ano, mes, dia, hora:min:seg miliseg
console.log(data.toString())
const datastring = new Date('2019-04-20 20:20:59')
console.log(datastring.toString())

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //O mes começa em 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0 é domingo e 6 - sábado
console.log(Date.now())

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda (data.getDate())
    const mes = zeroAEsquerda (data.getMonth() + 1)
    const ano = zeroAEsquerda (data.getFullYear())
    const hora = zeroAEsquerda (data.getHours())
    const min = zeroAEsquerda (data.getMinutes())
    const seg = zeroAEsquerda (data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataFormat = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)