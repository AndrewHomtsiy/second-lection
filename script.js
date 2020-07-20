let firstNumber,
    secondNumber;

firstNumber = +(prompt("Введіть 1 число:"));
secondNumber = +(prompt("Введіть 2 число:"));
while (isNaN(firstNumber, secondNumber)) {
    firstNumber, secondNumber = +(prompt("Введіть будь ласка ціле число:"));
}


const missNum = confirm("Пропускати парні числа?");

console.log(
`Число 1: ${firstNumber};
Число 2: ${secondNumber};
Пропускати парні числа?: ${missNum}`);


const max = Math.max(firstNumber, secondNumber);
const min = Math.min(firstNumber, secondNumber);

let sum = 0;
    for(let i = min; i <=max; i++) {
        if(missNum && i%2 ===0 ) {
            continue;
        }
        sum +=i;
    }

console.log(`Сума чисел: ${sum}`);

