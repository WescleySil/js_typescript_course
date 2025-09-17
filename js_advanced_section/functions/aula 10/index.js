// Constructor -> objetos
// Factory -> objetos
// Constructor -> Pessoa
// Factory -> criarPessoa

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.falar = function(){
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('Wescley', 'Silva');

console.log(p1)
p1.falar();