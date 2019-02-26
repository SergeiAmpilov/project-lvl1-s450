import readlineSync from 'readline-sync';

const roundCountCommon = 3;

const getGreetingAndName = (greetingText) => {
  console.log(greetingText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

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

const greeting = () => {
  getGreetingAndName('Welcome to the Brain Games!');
};


const isEvenGame = () => {
  const name = getGreetingAndName('Welcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".');

  let rightAnswerCount = 0;

  while (rightAnswerCount < roundCountCommon) {
    const randNom = Math.floor(Math.random() * 100);
    console.log(`Question: ${randNom}`);
    const ansUser = readlineSync.question('Your answer: ');
    const correctAnswer = randNom % 2 === 0 ? 'yes' : 'no';

    if (ansUser === correctAnswer) {
      console.log('Correct!');
      rightAnswerCount++;
    } else {
      console.log(`${ansUser} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const calcGame = () => {
  const name = getGreetingAndName('Welcome to the Brain Games! \nWhat is the result of the expression?');

  let rightAnswerCount = 0;
  while (rightAnswerCount < roundCountCommon) {
    const randN1 = Math.floor(Math.random() * 100);
    const randN2 = Math.floor(Math.random() * 100);
    const randOper = getRandomOperator();

    console.log(`Question: ${randN1} ${randOper} ${randN2}`);
    const ansUser = readlineSync.question('Your answer: ');
    const rightAnswer = getRightAnswer(randN1, randN2, randOper);

    if (ansUser === String(rightAnswer)) {
      console.log('Correct!');
      rightAnswerCount++;
    } else {
      console.log(`${ansUser} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { greeting, isEvenGame, calcGame };
