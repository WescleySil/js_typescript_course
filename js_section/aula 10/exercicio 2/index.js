let varA = 'A' //é para ter valor de B
let varB = 'B' //é para ter valor de C
let varC = 'C' //é para ter valor de A
let suporte = '';

console.log(varA, varB, varC);


suporte = varA;
varA = varB;
varB = varC
varC = suporte;

console.log(varA, varB, varC);
