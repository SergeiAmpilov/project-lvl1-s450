import { cons, car, cdr } from 'hexlet-pairs';
import { gameIteratorNew, getRandom100 } from '../common';

const getRandomOperator = () => {
  const r = getRandom100();

  if (r <= 33) {
    return '+';
  }

  if (r <= 67) {
    return '-';
  }

  return '*';
};

const calcGame = () => {
  const greetingText = 'What is the result of the expression?';

  const gameGenerator = () => {
    const randomValue = cons(getRandomOperator(), cons(getRandom100(), getRandom100()));
    const operator = car(randomValue);
    const n1 = car(cdr(randomValue));
    const n2 = cdr(cdr(randomValue));

    return (param) => {
      if (param === 'rightAnswer') {
        switch (operator) {
          case '+':
            return String(n1 + n2);
          case '-':
            return String(n1 - n2);
          case '*':
            return String(n1 * n2);
          default:
            return 0;
        }
      }

      if (param === 'question') {
        return `${n1} ${operator} ${n2}`;
      }

      return 'unknown call of function';
    };
  };

  gameIteratorNew(gameGenerator, greetingText);
};

export default calcGame;
