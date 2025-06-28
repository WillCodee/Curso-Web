const produto = {nome: "Produto", preco: 1.8};
// const caneca = { ...produto, material:'porcelana' }; //Aponta ora outra variavel
//o que altera em um altera na outra e vice versa
const caneca = Object.assign({}, produto, {material: 'porcelana'});


caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca)






