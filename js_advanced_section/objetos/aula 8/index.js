function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        this.verSaldo();
        console.log('Saldo insuficiente');
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c.: ${this.agencia}/${this.conta}\nSaldo: R$ ${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

Conta.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        this.verSaldo();
        console.log('Saldo insuficiente');
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo, ){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta1 = new Conta(11, 22, 10);
const conta2cc = new ContaCorrente(11, 22, 10, 1000);
const conta3cp = new ContaPoupanca(11, 22, 10);

conta1.depositar(21);
conta1.sacar(32);
console.log(conta1);
conta2cc.sacar(1000);
conta2cc.sacar(23);
