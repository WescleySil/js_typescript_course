const nome = 'Wescley Silva';
const sobrenome = 'De Castro';
const idade = 20;
const peso = 54;
const alturaEmM = 1.70;
let imc; // peso / (altura * altura)
let anoNascimento;

console.log(`${nome} ${sobrenome} tem ${idade} anos`);
console.log(`pesa ${peso} Kg tem ${alturaEmM} de altura e seu IMC é de ${imc = peso/(alturaEmM * alturaEmM)}`);
console.log(`${nome} ${sobrenome} nasceu em ${2025 - idade}`)