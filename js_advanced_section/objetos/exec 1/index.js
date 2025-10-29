//Primeiro - Pegar os 9 digitos do cpf e multiplicar de 10 até 1 decrescentemente e somar tudo.
//Segundo - fazer a conta 11 - (total % 11) que vai resultar no primeiro digito do cpf 
//OBS -> se o numero da conta acima for maior que 9, então o valor dele é 0

//Terceiro - Pegar os 10 digitos do cpf(adicione o ultimo digito obtido no final) e multiplicar de 11 até 1 decrescentemente e some tudo
//Quarto - fazer a conta 11 - (total % 11) que vai resultador no segundo digito do cpf
//OBS -> se o numero da conta acima for maior que 9, então o valor dele é 0

function Cpf(cpf){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}

Cpf.prototype.validar = function (){
    if(typeof this.cpfLimpo === undefined) return false;

    if(this.cpfLimpo.length !== 11) return false;

    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial);

    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
}

Cpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (contador * Number(val));
        contador--;
        return ac;
    },0);

    const digito = 11 - (total % 11); 
    return digito > 9 ? '0' : String(digito);
}

Cpf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = new Cpf('626.257.373-95');
const cpf2 = new Cpf('111.111.111-11');
console.log(cpf2.validar());
console.log(cpf.validar());