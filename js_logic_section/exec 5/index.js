function maiorQue(num, num2)
{
    return num > num2 ? `${num} é maior que ${num2}` : `${num} é menor que ${num2}`
}

const max = 100;
const min = 1
let i = 0

while(i <= 10){
    console.log(maiorQue(Math.round(Math.random() * (max - min) + min) , Math.round(Math.random() * (max - min) + min)))
    i++;
}