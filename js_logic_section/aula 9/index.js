const verdadeira = true;

// Let tem escopo de bloco { ... }
// Var so tem escopo de função


let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira){
    let nome = "otávio"
    console.log(nome, nome2);

    if(verdadeira){
        let nome = "Castro"
        console.log(nome)
    }

}