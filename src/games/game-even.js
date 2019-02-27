import gameIterator from '../common';
import getRandom from '../utils';

const isEven = n => n % 2 === 0;

const isEvenGame = () => {
  const greetingText = 'Answer "yes" if number even otherwise answer "no".';

  const gameGenerator = () => {
    const randomValue = getRandom();
    return (param) => {
      switch (param) {
        case 'question':
          return String(randomValue);
        case 'rightAnswer':
          return isEven(randomValue) ? 'yes' : 'no';
        default:
          return 0;
      }
    };
  };

  gameIterator(gameGenerator, greetingText);
};

export default isEvenGame;
