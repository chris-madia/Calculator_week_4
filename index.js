let allTheButtons = [{
    text: '9',
    value: 9,
  },
  {
    text: '8',
    value: 8,
  },
  {
    text: '7',
    value: 7,
  },
  {
    text: '/',
    value: '/',
  },
  {
    text: '6',
    value: 6,
  },
  {
    text: '5',
    value: 5,
  },
  {
    text: '4',
    value: 4,
  },
  {
    text: '×',
    value: '*',
  },
  {
    text: '3',
    value: 3,
  },
  {
    text: '2',
    value: 2,
  },
  {
    text: '1',
    value: 1,
  },
  {
    text: '−',
    value: '-',
  },
  {
    text: '0',
    value: 0,
  },
  {
    text: '.',
    value: '.',
  },
  {
    text: '=',
    value: '=',
  },
  {
    text: '+',
    value: '+',
  },
];

let currentExpression = '';

let calculatorElement = document.getElementById('calculator');
let display = document.createElement('div');
display.classList.add('calculator-display');
let clearButton = createButton('C');

clearButton.addEventListener('click', function() {
  currentExpression = '';
  updateDisplay();
});

calculatorElement.appendChild(display);
calculatorElement.appendChild(clearButton);

allTheButtons.forEach(function(item) {
  let chris = createButton(item.text);

  if (item.value === '=') {
    chris.classList.add('equals');

    chris.addEventListener('click', function() {
      try {
        currentExpression = '' + eval(currentExpression);
      } catch (e) {
        currentExpression = '';
      }
      updateDisplay();
    });
  } else {
    if (typeof item.value === 'number') {
      chris.classList.add('number');
    } else if (item.value === '.') {
      chris.classList.add('decimal');
    } else {
      chris.classList.add('operation');
    }

    chris.addEventListener('click', function() {
      if (currentExpression.length >= 9)
        return;

      currentExpression += '' + item.value;
      updateDisplay();
    });
  }

  calculatorElement.appendChild(chris);
});

function updateDisplay() {
  display.textContent = currentExpression.substring(0, 9);
}

function createButton(text) {
  let chris = document.createElement('button');
  chris.textContent = text;
  chris.classList.add('calculator-button');
  return chris;
}
