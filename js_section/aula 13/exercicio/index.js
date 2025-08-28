let numero = Number(prompt('Digite um número:'));

let numeroTitulo = document.querySelector('#numero-titulo');
let numeroRaiz = document.querySelector('ul li:nth-child(1)');
let numeroInteiro = document.querySelector('ul li:nth-child(3)');
let numeroNaN = document.querySelector('ul li:nth-child(5)');
let numeroArredondadoBaixo = document.querySelector('ul li:nth-child(7)');
let numeroArredondadoCima = document.querySelector('ul li:nth-child(9)');
let numero2CasasDecimais = document.querySelector('ul li:nth-child(11)');


numeroTitulo.innerHTML = `${numero}`;
numeroRaiz.innerHTML += `${numero ** 0.5}`;
numeroInteiro.innerHTML = `${numero} é inteiro: `;
numeroInteiro.innerHTML += `${Number.isInteger(numero) ? "sim" : "não"}`;
numeroNaN.innerHTML += `${Number.isNaN(numero) ? "sim" : "não"}`;
numeroArredondadoBaixo.innerHTML += `${Math.floor(numero)}`;
numeroArredondadoCima.innerHTML += `${Math.ceil(numero)}`;
numero2CasasDecimais.innerHTML += `${numero.toFixed(2)}`
