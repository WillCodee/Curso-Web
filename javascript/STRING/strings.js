//  Para exibir as aspas usa-se barras
// let umaString="Um \"Texto\"";

//             01234567 
let umaString="Um Texto";
console.log(umaString[4]) //Pegar um valor dentro do texto
console.log(umaString.charAt(8)) //Pegar um valor dentro do texto
console.log(umaString.concat(' em um lindo dia')) //concatenar
console.log(umaString.indexOf('t')) //informa a posição da letra
console.log(umaString.lastIndexOf('m',4)) //informa a posição da letra o last, quer dizer pra trás
console.log(umaString.match(/[a-z]/g)) //expressões regulares
console.log(umaString.search(/[a-z]/))//procurou por um indice
console.log(umaString.replace('Um','Outra'))//Substituiu uma letra

let duasString = "O rato roeu a roupa do rei de roma"
console.log(duasString.replace(/r/g,'l')) //usando espressões regulares para trocar as palavras
console.log(duasString.length);//ver o tamnho da string
console.log(duasString.slice(2,6));//pegar uma palavra
console.log(duasString.slice(-5)); //pega os ultimos indices
console.log(duasString.split(' ')) // divide em arrays
console.log(duasString.split(' ',2))//separar em x resultados
console.log(duasString.toUpperCase()) //Tudo maiusculo
console.log(duasString.toLowerCase()) //Tudo minusculo
