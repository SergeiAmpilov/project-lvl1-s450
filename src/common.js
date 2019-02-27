import readlineSync from 'readline-sync';

const roundCountCommon = 3; // максимальное кол-во раундов

const gameIteratorNew = (gameGenerator, greetingText) => {
  console.log(`Welcome to the Brain Games!\n${greetingText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundCountCommon; i += 1) {
    const game = gameGenerator();
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

export default gameIteratorNew;
