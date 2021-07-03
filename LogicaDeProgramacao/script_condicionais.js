let numero = -5;

if (numero > 0){
    console.log('Numero positivo');
} else if (numero == 0){
    console.log('numero zero');
}
else {
    console.log('Numero Negativo');
}

//tenário

let numero1 = 1;
let paridade = numero1 % 2 == 0 ? 'par' : 'impar';

console.log(paridade);

//switch

let sinal = 'veramelho';

switch(sinal){
    case 'verde' : 
        console.log('passa');
        break;
    case 'amarelo' :
        console.log('cuidado');
        break;
    case 'vermelho' :
        console.log('fechado, não passe');
        break;
    
    default : console.log('sinal inválido');
}