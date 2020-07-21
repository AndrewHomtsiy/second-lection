let firstNumber, secondNumber ='';
let sum = 0;

do {
  firstNumber = +prompt("Введіть 1 число:");
  if (Number.isInteger(firstNumber) && firstNumber !== '') {
    continue;
  }
  alert ("Введіть будь ласка ціле 1 число:");
} while (!Number.isInteger(firstNumber) &&firstNumber !== 0);


do {
  secondNumber = +prompt("Введіть 2 число:");
  if (Number.isInteger(secondNumber) && secondNumber !== '') {
    continue;
  }
 alert ("Введіть будь ласка ціле 2 число:");
} while (!Number.isInteger(secondNumber) && firstNumber !== 0);


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





