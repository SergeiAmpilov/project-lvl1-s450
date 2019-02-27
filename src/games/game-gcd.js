import { cons, car, cdr } from 'hexlet-pairs';
import gameIteratorNew from '../common';
import getRandom from '../utils';

const gcd = (n1, n2) => {
  const minValue = Math.min(n1, n2);
  let maxGcd = 1;

  for (let i = 1; i <= minValue; i += 1) {
    maxGcd = (n1 % i === 0 && n2 % i === 0) ? i : maxGcd;
  }

  return maxGcd;
};

const gameGcd = () => {
  const greetingText = 'Find the greatest common divisor of given numbers.';
  const gameGenerator = () => {
    const randomValue = cons(getRandom(), getRandom());
    return (param) => {
      const n1 = car(randomValue);
      const n2 = cdr(randomValue);

      if (param === 'rightAnswer') {
        return String(gcd(n1, n2));
      }

      if (param === 'question') {
        return `${n1} ${n2}`;
      }

      return 'unknown call of function';
    };
  };

  gameIteratorNew(gameGenerator, greetingText);
};

export default gameGcd;
