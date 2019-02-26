import { gameIteratorNew, getRandom100 } from '../common';

const isEven = n => n % 2 === 0;

const isEvenGame = () => {
  const greetingText = 'Answer "yes" if number even otherwise answer "no".';

  const gameConditionGenerator = n => (param) => {
    switch (param) {
      case 'question':
        return String(n);
      case 'rightAnswer':
        return isEven(n) ? 'yes' : 'no';
      default:
        return 0;
    }
  };

  gameIteratorNew(getRandom100, gameConditionGenerator, greetingText);
};

export default isEvenGame;
