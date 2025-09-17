// Declaração de função (Function hoisting) -> A engine do javascript eleva a declaração da função para o topo do arquivo.
falaOi();
function falaOi() {
    console.log('oi');
}

//First class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function (){
    console.log('Sou um dado');
}
souUmDado();

//arrowFunction
const arrowFunction = () => {
    console.log('Sou uma arrow function');
}
arrowFunction();


//Dentro de um objeto
const pessoa = {
    falar(){
        console.log('Estou falando');
    }
}
pessoa.falar();