import readlineSync from 'readline-sync';

const roundCountCommon = 3; // максимальное кол-во раундов

const gameIterator = (gameGenerator, greetingText) => {
  console.log(`Welcome to the Brain Games!\n${greetingText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundCountCommon; i += 1) {
    const game = gameGenerator();
    const rightAnswer = game('rightAnswer');
    const question = game('question');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameIterator;
