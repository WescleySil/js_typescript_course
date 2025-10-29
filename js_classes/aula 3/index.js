class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) return;
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) return;
        this.ligado = true;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(cor){
        super(nome);
        this.cor = cor;
    }
}

const d1 = new DispositivoEletronico('Telefone');
console.log(d1);
d1.ligar()
console.log(d1);