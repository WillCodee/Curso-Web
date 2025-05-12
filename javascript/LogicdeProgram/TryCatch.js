// try{ //Tente executar alho
//     console.log(naoExiste)
// } catch(err){ //Exiba se tiver um erro
//     console.log('Não existe Mesmo')
// }


// function soma(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         // throw('x e y precisam ser números')
//         throw new Error('x e y precisam ser números')
//         //Sinaliza o erro
//     }

//     return x+y
// }


// console.log(soma(1,2))
// console.log(soma('1',2))



// try{
    
// }catch(e){

// }finally{
//     console.log('Eu sempre sou executado')
// }

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date')
    }

    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
const data= new Date('01-01-1970 12:58:12')
const hora = retornaHora()
console.log(hora)
} catch(e){

}finally{
    console.log('Tenha um Bom dia')
}