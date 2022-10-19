let operationSelection = prompt('Enter your operation : \n"+"\n"-"\n"*"\n"/"');
let firstNumber = +prompt('Your first number.');
let secondNumber = +prompt('Your second number.');

if (operationSelection === '+') {

    alert(firstNumber + secondNumber);

} else if (operationSelection === '-') {

    alert(firstNumber - secondNumber);

} else if (operationSelection === '*') {

    alert(firstNumber * secondNumber);

} else if (operationSelection === '/') {

    alert(firstNumber / secondNumber);

} else {
    result = 'incorrect operation';

}

