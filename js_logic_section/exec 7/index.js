function fizzBuzz(num) {
    if(Number.isNaN(num)) return;

    if (num % 3 === 0 && num % 5 === 0 ){
        return 'FizzBuzz';
    }

    if(num % 3 === 0){
        return 'Fizz';
    }

    if(num % 5 === 0){
        return 'Buzz';
    }

    return num;
}

const max = 100;
const min = 1;
let i = 0;

while (i <= 5){
    let rand = Math.round(Math.random() * (max - min)) + min;
    console.log(`${rand}:  ${fizzbuzz(rand)}`)
    i++;
}