import { cons, car, cdr } from 'hexlet-pairs';
import gameIteratorNew from '../common';
import getRandom from '../utils';

const gameGcd = () => {
  const greetingText = 'Find the greatest common divisor of given numbers.';
  const gameGenerator = () => {
    const randomValue = cons(getRandom(), getRandom());
    return (param) => {
      const n1 = car(randomValue);
      const n2 = cdr(randomValue);
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
  };

  gameIteratorNew(gameGenerator, greetingText);
};

export default gameGcd;
