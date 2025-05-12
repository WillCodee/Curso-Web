const nome = prompt('Digite seu Nome Completo')
alert(`Bem-Vindo ${nome}`)
const anoNascimento = prompt('Qual seu Ano de Nascimento')
alert(`Você Nasceu em ${anoNascimento}`)
const confirmar = confirm('Deseja ver detalhes sobre seu nome?')


const detalhes = document.getElementById('detalhes')

detalhes.innerHTML += `Seu nome em letras Maiúsculas é ${nome.toUpperCase()} <br />`
detalhes.innerHTML += `Seu nome em letras Minusculas é ${nome.toLowerCase()} <br />`
detalhes.innerHTML += `A primeira letra do seu nome é ${nome.charAt(0)} <br />`
detalhes.innerHTML += `A posição que a letra "a" aparece pela primeira vez é no indice ${nome.indexOf('a')} <br />`
detalhes.innerHTML += `Seu nome contém a palavra "Silva" no indice? ${nome.search("Silva")} <br />`
detalhes.innerHTML += `Seu nome trocando a letra "a" por "@" é ${nome.replace(/a/g,'@')} <br />`
detalhes.innerHTML += `Seu nome tem <b>${nome.length}</b>  palavras <br />`
detalhes.innerHTML += `A posição que a letra "a" aparece pela ultima vez é no indice ${nome.lastIndexOf('a')} <br />`
detalhes.innerHTML += `As 4 ultimas letras do seu nome é ${nome.slice(-4)} <br />`
detalhes.innerHTML += `Seu nome fatiado é ${nome.split(' ')} <br />`

// Numbers E MATH

const numero = Number(prompt('Informe qualquer Número'))

const oper = document.getElementById('numbers')

oper.innerHTML += `Arredondado para baixo ${Math.floor(numero)} <br />`
oper.innerHTML += `Arredondado para cima ${Math.ceil(numero)} <br />`
oper.innerHTML += `Arredondado automatico ${Math.round(numero)} <br />`
oper.innerHTML += `Arredondado com duas casas decimais ${numero.toFixed(2)} <br />`
oper.innerHTML += `A Raiz Quadrada ${numero ** 0.5} <br />`
oper.innerHTML += `Elevado ao Quadrado ${numero ** 2} <br />`



