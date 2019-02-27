import gameIterator from '../common';
import getRandom from '../utils';

const getRandomOperator = () => {
  const optionOfOperation = getRandom(1, 4);
  switch (optionOfOperation) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '*';
  }
};

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 0;
  }
};

const calcGame = () => {
  const description = 'What is the result of the expression?';

  const gameGenerator = () => {
    const operator = getRandomOperator();
    const n1 = getRandom();
    const n2 = getRandom();

    return (param) => {
      if (param === 'rightAnswer') {
        return String(calculate(operator, n1, n2));
      }

      if (param === 'question') {
        return `${n1} ${operator} ${n2}`;
      }

      return 'unknown call of function';
    };
  };

  gameIterator(gameGenerator, description);
};

export default calcGame;
