import readlineSync from 'readline-sync';

const getGreetingAndName = (greetingText) => {
  console.log(greetingText);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

const greeting = () => {
  getGreetingAndName('Welcome to the Brain Games!');
};


const isEvenGame = () => {
  const name = getGreetingAndName('Welcome to the Brain Games! \n Answer "yes" if number even otherwise answer "no".');

  let rightAnswerCount = 0;

  while (rightAnswerCount < 3) {
    const randNom = Math.floor(Math.random() * 100);
    console.log(`Question: ${randNom}`);
    const ansUser = readlineSync.question('Your answer: ');
    const correctAnswer = randNom % 2 === 0 ? 'yes' : 'no';

    if (ansUser === correctAnswer) {
      console.log('Correct!');
      rightAnswerCount++;
    } else {
      console.log(`${ansUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { greeting, isEvenGame };
