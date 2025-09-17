function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome: nome,
        sobrenome: sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc(){
            const indice = peso / (altura ** 2);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa('Wescley', 'Silva', 1.7, 55);
p1.nomeCompleto = 'Wesley Castro'
console.log(p1);
console.log(p1.imc);
console.log(p1.nomeCompleto);