function sum(a, b){
    let sumOfNumber = a + b;
    return sumOfNumber;
}

function sub(a, b){
    let subOfNumber = a - b;
    return subOfNumber;
}

function divide(a, b){
    let divison = a/b;
    return divison;
}

function mult(a, b){
    let multiply = a * b;
    return multiply;
}

function equation(a, b){
    let addition = sum(a, b);
    let result1 = mult(addition ,addition);
    return result1;
}

let finalResult = equation(4, 5);
console.log(finalResult);
