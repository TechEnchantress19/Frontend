const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number')) {
            handleNumber(value);
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.id === 'clear') {
            clearCalculator();
        } else if (button.id === 'decimal') {
            addDecimal();
        }
        updateScreen();
    });
});

function handleNumber(num) {
    currentInput += num;
}

function handleOperator(op) {
    if (currentInput === '') return;
    firstValue = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (firstValue === '' || currentInput === '') return;
    secondValue = currentInput;
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    firstValue = '';
    secondValue = '';
}

function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function clearCalculator() {
    currentInput = '';
    operator = '';
    firstValue = '';
    secondValue = '';
}

function updateScreen() {
    calculatorScreen.value = currentInput;
}
