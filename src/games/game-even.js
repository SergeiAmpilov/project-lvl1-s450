import { roundCountCommon, getGreetingAndName, gameIterator } from '../common';

const isEven = n => n % 2 === 0;

const isEvenGame = () => {
  const name = getGreetingAndName('Answer "yes" if number even otherwise answer "no".');

  for (let i = 0; i < roundCountCommon; i += 1) {
    const randomValue = Math.floor(Math.random() * 100);
    const correctAnswerText = isEven(randomValue) ? 'yes' : 'no';
    const resultOfIter = gameIterator(String(randomValue), correctAnswerText, name);

    if (!resultOfIter) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default isEvenGame;
