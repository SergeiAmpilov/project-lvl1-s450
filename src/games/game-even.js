import { roundCountCommon, getGreetingAndName, gameIterator } from '../common';

const isEvenGame = () => {
  const name = getGreetingAndName('Answer "yes" if number even otherwise answer "no".');

  let rightAnswerCount = 0;
  while (rightAnswerCount < roundCountCommon) {
    const randNom = Math.floor(Math.random() * 100);

    if (gameIterator(String(randNom), randNom % 2 === 0 ? 'yes' : 'no', name)) {
      rightAnswerCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default isEvenGame;
