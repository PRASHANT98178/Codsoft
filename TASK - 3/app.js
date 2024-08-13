let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = '';
let operator = null;
let previousInput = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.innerText = '0';
        } else if (value === '=') {
            if (operator && currentInput && previousInput) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`).toString();
                operator = null;
                previousInput = '';
                display.innerText = currentInput;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});
