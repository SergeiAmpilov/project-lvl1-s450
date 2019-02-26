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
  const paramGenerator = () => cons(getRandomOperator(), cons(getRandom100(), getRandom100()));

  const gameConditionGenerator = val => (param) => {
    const operator = car(val);
    const n1 = car(cdr(val));
    const n2 = cdr(cdr(val));

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

  gameIteratorNew(paramGenerator, gameConditionGenerator, greetingText);
};

export default calcGame;
