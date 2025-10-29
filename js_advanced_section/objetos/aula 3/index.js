function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function (){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Valor inválido');
                return;
            }

            estoque = valor
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));