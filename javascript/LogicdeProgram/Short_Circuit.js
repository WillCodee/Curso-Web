/*
&& -> Todas as expressões precisam ser verdadeiras para retornar True
False && True -> False "O valor mesmo"


|| -> Apenas uma expressão precisa ser verdadeira para retornar True
true || false -> vai retornar " o valor (real) verdadeiro"



FALSY
*false
0
'' "" `´
null / undefined
NaN
*/

console.log('Will' && 0 && 'Maria')
console.log('Will' && true && 'Maria')
console.log('Will' && null && 'Maria')

console.log(0 || false || null || 'Will Lago' || true)
const corprim = null
console.log(corprim || 'preto')



