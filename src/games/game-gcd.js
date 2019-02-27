
import gameIterator from '../common';
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
  const description = 'Find the greatest common divisor of given numbers.';
  const gameGenerator = () => {
    const n1 = getRandom();
    const n2 = getRandom();
    return (param) => {
      if (param === 'rightAnswer') {
        return String(gcd(n1, n2));
      }

      if (param === 'question') {
        return `${n1} ${n2}`;
      }

      return 'unknown call of function';
    };
  };

  gameIterator(gameGenerator, description);
};

export default gameGcd;
