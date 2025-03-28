// Aлгоритм з послідовною перевіркою умов

let a = 5;
let b = 10;
let x = 6;


function result() {

if (x < 0 || x > 9) {
    console.log("Значення x не входить до області визначення функції");
    return null;
}

let result;

if (x >= 0 && x < 4) {
    result = Math.cos(x);
}

if (x === 4) {
    result = 3*Math.pow(x, 2) + b*x;
}


if (x > 4 && x < 9) {
    if (a * x + b <= 0) {
        console.log("Вираз під логарифмом має бути додатнім");
        return null; 
    }
    result = Math.log(a * x + b);

}

    return result; 

}

const computedX = result(x);

if (computedX !== null) {
    console.log(`Результат обчислень: ${computedX}`);
}
