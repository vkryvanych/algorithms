//Алгоритм з вкладеною перевіркою умов

let a = 5;
let b = 10;
let x = 6;

let errorMessage = "";
let result = null;

if (x >= 0 && x <= 9) {
    if (x < 4) {
        result = Math.cos(x);
    } else if (x === 4) {
        result = 3 * Math.pow(x, 2) + b * x;
    } else {
        if (a * x + b > 0) {
            result = Math.log(a * x + b);
        } else {
            errorMessage = "Вираз під логарифмом має бути додатнім";
        }
    }
} else {
    errorMessage = "Значення x не входить до області визначення функції";
}

switch (errorMessage) {
    case "Вираз під логарифмом має бути додатнім":
    case "Значення x не входить до області визначення функції":
        console.log(errorMessage);
        break;
    default:
        console.log(`Результат обчислень: ${result}`);
}
