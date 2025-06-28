/* JÁ VIMOS
Object.keys (retorna as chaves)
object.freeze (congela o objeto)
Object.defineProperties(define várias propriedades)
Object.defineProperty(define uma propriedade)
*/
/*
VEREMOS / ESTAMOS VENDO
Object.values
Object.entries
Object.assign(des,any)
Object.getOwnPropertyDescriptor(o, 'prop') -> Mostra as descrições 
... (spread) -> Espalha os valores do objeto
*/

const produto = {nome: "Produto", preco: 1.8};
// const caneca = { ...produto, material:'porcelana' }; //Aponta ora outra variavel
//o que altera em um altera na outra e vice versa
 Object.freeze(produto);
const caneca = Object.assign({}, produto, {material: 'porcelana'});

produto.nome = 'Mudou'
caneca.nome = 'Outra Coisa';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca)


const item = {nome: "Item", preco: 1.8,material:'concreto'};
Object.defineProperty(item, 'nome',{
    writable:false,
    configurable: false,
    value: 'Qualquer Outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(item, 'nome'));
item.nome = 'Outra coisa';
delete item.nome;

console.log(item)
// delete item.preco;
console.log(item)

console.log(Object.values(item)) //Pega os Valores
console.log(Object.entries(item)) //Pega os Valores e deixa em arrays separados

console.log('######################')
for(let [chave,entry] of Object.entries(item)){
    console.log(chave, entry)
}