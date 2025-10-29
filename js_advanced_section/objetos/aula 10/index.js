const pessoas = [
    { id: 1, nome: 'Luiz'},
    { id: 2, nome: 'Wescley'},
    { id: 3, nome: 'Wesley'},
];

const novasPessoas = {}

for (const {id,nome} of pessoas){
    novasPessoas[id] = {id, nome}
}