const frutas = ['maça', 'banana', 'laranja', 'uva'];
const pessoa = {
    nome: "Wescley",
    sobrenome: "Silva",
    idade: 20
}

for (let chave in pessoa){
    console.log(pessoa[chave])
}

for(let i in frutas){
    console.log(frutas[i]);
}