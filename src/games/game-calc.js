import { roundCountCommon, getGreetingAndName, gameIterator } from '../common';

const getRandomOperator = () => {
  const r = Math.random();

  if (r <= 0.33) {
    return '+';
  }

  if (r <= 0.67) {
    return '-';
  }

  return '*';
};

const getRightAnswer = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    default:
      return 0;
  }
};

const calcGame = () => {
  const name = getGreetingAndName('What is the result of the expression?');

  let rightAnswerCount = 0;
  while (rightAnswerCount < roundCountCommon) {
    const randN1 = Math.floor(Math.random() * 100);
    const randN2 = Math.floor(Math.random() * 100);
    const randOper = getRandomOperator();

    if (gameIterator(`${randN1} ${randOper} ${randN2}`, String(getRightAnswer(randN1, randN2, randOper)), name)) {
      rightAnswerCount++;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
