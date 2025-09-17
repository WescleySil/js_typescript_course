const pessoa = {
    nome: "Wescley",
    //sobrenome: "Silva",
    idade: 25,
    endereco: {
        rua: "Rua A",
        numero: 123,
    }
}

//Atribuição por desestruturação
const { nome: teste, sobrenome = 'outra', idade, endereco: { rua, numero } } = pessoa;

const { nome, ...resto} = pessoa;

console.log(resto);