import { gameIteratorNew, getRandom100 } from '../common';

const isEven = n => n % 2 === 0;

const isEvenGame = () => {
  const greetingText = 'Answer "yes" if number even otherwise answer "no".';

  const gameGenerator = () => {
    const randomValue = getRandom100();
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

  gameIteratorNew(gameGenerator, greetingText);
};

export default isEvenGame;
