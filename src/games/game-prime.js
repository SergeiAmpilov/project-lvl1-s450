import getRandom from '../utils';
import gameIterator from '../common';

const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameGenerator = () => {
    const randomNumber = getRandom();
    return (param) => {
      switch (param) {
        case 'rightAnswer':
          return isPrime(randomNumber) ? 'yes' : 'no';
        case 'question':
          return String(randomNumber);
        default:
          return 'unknown call of function';
      }
    };
  };

  gameIterator(gameGenerator, description);
};

export default gamePrime;
