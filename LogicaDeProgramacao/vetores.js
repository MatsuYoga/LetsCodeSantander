// vetor -- lista dinamica

let vetor = [10,20,30,40,50];

vetor[0] = 'posição um';
vetor[5] = 'mais uma posicao';

console.log(vetor[0],vetor[2],vetor[1],vetor[5]);

// vetor vazio

let vetorVazio = []

for (let i = 0; i < 10; i++){
    vetorVazio.push(i);
}

console.log(vetorVazio)

for (i1 = 0; i1 < vetorVazio.length; i1++){
    console.log(vetorVazio[i1]);
}

let vetor1 = [10,20,30,40,11150];

for (let numero of vetor1){
    console.log(numero);
}

// matriz 

let matriz = [
    [10,20,30,40,50],
    [1,2,3,4,5,6,78],
    [10,240,330,40,5110],
];

for (let linha of matriz){
    for(let elemento of linha){
        console.log(elemento)
    }
}