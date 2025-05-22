function* geradora1(){
    //Codigo
    yield 'Valor 1';
    //Codigo
    yield 'Valor 2';
    //Codigo
    yield 'Valor 3';
}

const g1 = geradora1()
console.log(g1.next()) //next para ver o valor
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next())//Acabou os valores {true}

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

console.log('#####################')

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
//Delegar uma tarefa pra outra função geradora
function* geradora4(){
  yield* geradora3()
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4()
for (let valor of g4){
    console.log(valor)
}


function* geradora5(){
    yield function() {
        console.log('Vum do Y1')
    }

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()