// const objA = {
//     chaveA: 'A'
// }

// const objB = {
//     chaveB: 'B'
// }

// Object.setPrototypeOf(objB, objA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(value) {
    this.preco = this.preco - (this.preco * (value/100))
};

const p1 = new Produto('casa', 100000);

console.log(p1);
p1.desconto(100);
console.log(p1)