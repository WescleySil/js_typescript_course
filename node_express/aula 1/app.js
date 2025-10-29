const nome = 'Wecsley';
const sobrenome = 'Silva';

const falaNome = () => {
    console.log(nome, sobrenome)
}

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

// module.exports.nome = nome;
// module.exports.falaNome = falaNome;


this.Pessoa = Pessoa;
exports.nome = nome;
exports.falaNome = falaNome;