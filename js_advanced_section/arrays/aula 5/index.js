// Filter, map, reduce 

//Dobre os números
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

console.log(numeros.map((a) => a*2));
console.log(pessoas.map((a) => a.nome));
console.log(pessoas.map((a) => ({idade: a.idade})));
console.log(pessoas.map((a,b) => a.id = b + 1));