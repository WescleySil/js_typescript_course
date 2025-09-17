// Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar valores
// -> reduzir( somar tudo );
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

console.log(numeros.filter(a => a % 2 === 0)
    .map(a => a * 2)
    .reduce((a, b) => a + b, 0));