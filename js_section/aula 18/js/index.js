function escopoLocal () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function recebeEventoForm(event) {
        event.preventDefault();

        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        let pessoa = criarPessoa(nome.value,sobrenome.value,peso.value,altura.value)

        pessoas.push(pessoa);
        mostraPessoaNaLista(pessoa);
    };

    function criarPessoa(nome,sobrenome,peso,altura){
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        };
    };

    function mostraPessoaNaLista(pessoa){
        resultado.innerHTML += `<p> ${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} m ${pessoa.peso} Kg </p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}
escopoLocal();