// Filter, map, reduce 

//Some todos os numeros
// Retorne um array com os pares
// REtorn um array com o dobro dos valores
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 77},
    {nome: 'Wallace', idade: 47}
];

console.log(numeros.reduce((a,b) => a + b,0));
console.log(numeros.reduce((a,b) => b%2 === 0 ?? a.push,[]));
console.log(numeros.reduce((a,b) => b * 2,0));
console.log(pessoas.reduce((a,b) =>  a.idade > b.idade ? a : a = b))