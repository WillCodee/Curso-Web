//ESTRUTURA DE CONDIÇÃO SWITCH/CASE

 const data = new Date('1987-04-19 00:00:00');
 const diaSemana = data.getDay()
let diaSemanaTexto2;

 console.log(diaSemana)


// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// }else if (diaSemana === 2){
//     diaSemanaTexto = 'Terça';
// }else if (diaSemana === 3){
//     diaSemanaTexto = 'Quarta';
// }else if (diaSemana === 4){
//     diaSemanaTexto = 'Quinta';
// }else if (diaSemana === 5){
//     diaSemanaTexto = 'Sexta';
// }else{
//     diaSemanaTexto = 'Sábado';
// }

switch (diaSemana){
    case 0:
        diaSemanaTexto2= 'Domingo';
    break;

    case 1:
        diaSemanaTexto2 = 'Segunda';
    break;

    case 2:
        diaSemanaTexto2 = 'Terça';
    break;

    case 3:
        diaSemanaTexto2 = 'Quarta';
    break;

    case 4:
        diaSemanaTexto2 = 'Quinta';
    break;

    case 5:
        diaSemanaTexto2 = 'Sexta';
    break;

    case 6:
        diaSemanaTexto2 = 'Sábado';
    break;

    default: //Valor Padrão
        diaSemanaTexto: '';
    break;
}

console.log(diaSemana, diaSemanaTexto2)

function getDiadaSemana (diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
    
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
    
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
    
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
    
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
    
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    
        default: //Valor Padrão
            diaSemanaTexto: '';
            return diaSemanaTexto;
    }
}

const diaSemanaTexto = getDiadaSemana(diaSemana)

console.log (diaSemana, diaSemanaTexto)