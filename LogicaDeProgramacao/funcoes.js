function escreva(texto){
    console.log(texto);
}

let i = 0;

while (i < 10){
    escreva('olha a funcao ' + i);
    i++;
}

//

function somar (a,b){
    return a+b;
}

escreva(somar(88,6));

//

const funcaoSomar = function (a,b){
    return a+b;
}

escreva(funcaoSomar(1,3));

// funcao de flecha

const flechaSoma = (a,b) => a*b;

escreva(flechaSoma(5,4));