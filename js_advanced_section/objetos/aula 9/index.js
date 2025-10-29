function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },
        sobrenome: {
            value: sobrenome
        }
    })
}



const p1 = criaPessoa('Wescley', 'Silva');
console.log(p1.falar());
 