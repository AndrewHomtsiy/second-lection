let sum = 0;
let firstNumber  = +prompt("Введіть 1 число:");
while(!Number.isInteger(firstNumber) || firstNumber == '') {
    alert("Введіть будь ласка ціле 1 число:")
    firstNumber = +prompt("Введіть 1 число:");
}
let secondNumber = +prompt ("Введіть будь ласка 2 число");
while(!Number.isInteger(secondNumber) || secondNumber == '') {
    alert("Введіть будь ласка ціле 2 число:")
    secondNumber = +prompt("Введіть 2 число:");
}
const missNum = confirm("Пропускати парні числа?");

console.log(
`Число 1: ${firstNumber};
Число 2: ${secondNumber};
Пропускати парні числа?: ${missNum}`);



const max = Math.max(firstNumber, secondNumber);
const min = Math.min(firstNumber, secondNumber);


    for(let i = min; i <=max; i++) {
        if(missNum && i%2 ===0 ) {
            continue;
        }
        sum +=i;
    }

console.log(`Сума чисел: ${sum}`);

