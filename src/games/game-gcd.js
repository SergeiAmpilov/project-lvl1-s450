import { cons, car, cdr } from 'hexlet-pairs';
import { gameIteratorNew, getRandom100 } from '../common';

const gameGcd = () => {
  const greetingText = 'Find the greatest common divisor of given numbers.';
  const paramGenerator = () => cons(getRandom100(), getRandom100());
  const gameConditionGenerator = val => (param) => {
    const n1 = car(val);
    const n2 = cdr(val);
    if (param === 'rightAnswer') {
      const minValue = Math.min(n1, n2);
      let gcd = 1;

      for (let i = 1; i <= minValue; i += 1) {
        gcd = (n1 % i === 0 && n2 % i === 0) ? i : gcd;
      }
      return String(gcd);
    }

    if (param === 'question') {
      return `${n1} ${n2}`;
    }

    return 'unknown call of function';
  };
  gameIteratorNew(paramGenerator, gameConditionGenerator, greetingText);
};

export default gameGcd;
