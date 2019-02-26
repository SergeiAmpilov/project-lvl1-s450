import readlineSync from 'readline-sync';

const roundCountCommon = 3; // максимальное кол-во раундов

const getRandom100 = () => Math.floor(Math.random() * 100);

const getGreetingAndName = (greetingText = '') => {
  console.log(`Welcome to the Brain Games!\n${greetingText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const gameIteratorNew = (paramGenerator, gameGenerator, greetingText) => {
  const name = getGreetingAndName(greetingText);

  for (let i = 0; i < roundCountCommon; i += 1) {
    const param = paramGenerator();
    const game = gameGenerator(param);
    const rightAnswerText = game('rightAnswer');
    const questionText = game('question');

    console.log(`Question: ${questionText}`);
    const ansUser = readlineSync.question('Your answer: ');

    if (ansUser !== rightAnswerText) {
      console.log(`${ansUser} is wrong answer ;(. Correct answer was ${rightAnswerText}.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  getGreetingAndName, roundCountCommon, gameIteratorNew, getRandom100,
};
