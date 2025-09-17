const numeros = [1,2,3,4,5,6,7,8,9];

for (let numero of numeros) {
    console.log(numero);
    if(numero === Math.round(Math.random() * (9 - 1) + 1)){
        console.log(`Parei no ${numero}`);
        break;
    }
}