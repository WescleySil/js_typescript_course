function escopoLocal() {
    const divResultado = document.querySelector('.caixa-resultado');
    const paragrafoResultado = divResultado.querySelector('.resultado');
    const form = document.querySelector('.form');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura')

    // divResultado.setAttribute('wrong', '');

    function recebeEventoForm(event){
        event.preventDefault();

        let dados = tratarDados(peso, altura);
    }

    function tratarDados(peso, altura){
        let dados = [
            {
                peso: '',
                altura: '',
            }
        ]
        if(Number(peso) && Number(altura)){
            dados.peso = Number(peso)
            dados.altura = Number(altura)
        } else {

        }
    }

    form.addEventListener(onsubmit, recebeEventoForm);
}

escopoLocal();