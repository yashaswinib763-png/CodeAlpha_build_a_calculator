const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentInput = '';

function updateDisplay(value) {
  display.value = value;
}

function calculateResult(expression) {
  try {
    // Evaluate the expression safely
    let result = eval(expression);
    if (result === undefined) return '';
    return result;
  } catch {
    return 'Error';
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      currentInput += value;
      updateDisplay(currentInput);

      // Show real-time result below input (optional)
      let result = calculateResult(currentInput);
      if (result !== '' && result !== 'Error') {
        updateDisplay(result.toString());
      }
    }
  });
});

clear.addEventListener('click', () => {
  currentInput = '';
  updateDisplay('');
});

equals.addEventListener('click', () => {
  let result = calculateResult(currentInput);
  updateDisplay(result.toString());
  currentInput = result.toString();
});