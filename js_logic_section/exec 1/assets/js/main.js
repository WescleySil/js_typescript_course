function escopoLocal() {
    const divResultado = document.querySelector('.caixa-resultado');
    const paragrafoResultado = divResultado.querySelector('.resultado');
    const form = document.querySelector('.form');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura')

    function recebeEventoForm(event){
        event.preventDefault();

        let dados = tratarDados(peso.value, altura.value);

        console.log(dados);

        if(typeof dados.peso === "string" && typeof dados.altura === "string"){
            paragrafoResultado.textContent = `${dados.peso} e ${dados.altura}`;
            divResultado.removeAttribute('right');
            divResultado.setAttribute('wrong', '');
        }
        
        else if (typeof dados.peso === "string"){
            paragrafoResultado.textContent = dados.peso;
            divResultado.removeAttribute('right');
            divResultado.setAttribute('wrong', '');
        }

        else if (typeof dados.altura === "string"){
            paragrafoResultado.textContent = dados.altura;
            divResultado.removeAttribute('right');
            divResultado.setAttribute('wrong', '');
        } 

        if (typeof dados.peso !== "string" && typeof dados.altura !== "string") {
            paragrafoResultado.textContent = calcularIMC(dados.peso, dados.altura);
            divResultado.removeAttribute('wrong');
            divResultado.setAttribute('right', '');
        }
    }

    function tratarDados(peso, altura){
        let dados = {
                peso: 0,
                altura: 0,
            }; 

        if(!Number.isNaN(Number(peso)) && !Number.isNaN(Number(altura))){
            dados.peso = Number(peso);
            dados.altura = Number(altura);
        }    

        if(!Number(peso)) {
            dados.peso = "Peso inválido";
        }

        if(!Number(altura)){
            dados.altura = "Altura inválida";
        }
        
        return dados;
    }

    function calcularIMC(peso, altura){
        let imc = peso / (altura * altura);

        if(imc < 18.5){
            return `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso).`
        }

        if( imc >= 18.5 && imc <= 24.9) {
            return `Seu IMC é ${imc.toFixed(2)} (Peso Normal).`
        }

        if( imc >= 25 && imc <= 29.9) {
            return `Seu IMC é ${imc.toFixed(2)} (Sobrepeso).`
        }

        if( imc >= 30 && imc <= 34.9) {
            return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1).`
        }

        if( imc >= 40) {
            return `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3).`
        }
    }

    form.addEventListener("submit", recebeEventoForm);
}

escopoLocal();