axios('pessoas.json')
    .then(resposta => carregaPessoas(resposta.data))

function carregaPessoas(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td');

        tr.innerHTML = pessoa.nome;
        tr.appendChild(td);

        tr.innerHTML = pessoa.email;
        tr.appendChild(td)

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}    