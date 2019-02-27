import gameIterator from '../common';
import getRandom from '../utils';

const getProgression = (start, step, size) => {
  const progressionItem = [];
  for (let i = 0; i < size; i += 1) {
    progressionItem[i] = i * step + start;
  }

  return progressionItem;
};

const getStringWithHiddenNomber = (items, hiddenNomberIndex) => items.map((item, index) => (index === hiddenNomberIndex ? '..' : String(item))).join(' ');

const gameProgression = () => {
  const description = 'What number is missing in the progression?';

  const gameGenerator = () => {
    const startProgressionNomber = getRandom(1, 5);
    const stepOfProgression = getRandom(1, 5);
    const sizeOfProgression = 10;

    const progressionItems = getProgression(startProgressionNomber,
      stepOfProgression, sizeOfProgression);

    const hiddenNomberIndex = getRandom(0, sizeOfProgression - 1);

    const rightAnswer = progressionItems[hiddenNomberIndex];
    const question = getStringWithHiddenNomber(progressionItems, hiddenNomberIndex);

    return (param) => {
      switch (param) {
        case 'question':
          return question;
        case 'rightAnswer':
          return String(rightAnswer);
        default:
          return 'unknown call of function';
      }
    };
  };


  gameIterator(gameGenerator, description);
};

export default gameProgression;
