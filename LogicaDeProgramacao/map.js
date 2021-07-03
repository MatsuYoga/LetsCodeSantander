//converter vetor strint to int

const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);
const vetorInt = vetor.map(stringToInt);

console.log(vetorInt);

somando = vetorInt[0] + vetorInt[1];

console.log(somando);

const vetor3 = vetorInt.map(x => x*x);

console.log(vetor3);