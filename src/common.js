import readlineSync from 'readline-sync';

const roundCountCommon = 3;

const getGreetingAndName = (greetingText = '') => {
  console.log(`Welcome to the Brain Games!\n${greetingText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const gameIterator = (questionText, rightAnswerText, name) => {
  console.log(`Question: ${questionText}`);
  const ansUser = readlineSync.question('Your answer: ');

  if (ansUser === rightAnswerText) {
    console.log('Correct!');
    return true;
  }

  console.log(`${ansUser} is wrong answer ;(. Correct answer was ${rightAnswerText}.\nLet's try again, ${name}!`);
  return false;
};


export { getGreetingAndName, roundCountCommon, gameIterator };
