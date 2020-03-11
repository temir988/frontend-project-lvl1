import readlineSync from 'readline-sync';

const startGame = (gameConditions, stepLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(gameConditions);

  const steps = 3;

  for (let i = 0; i < steps; i += 1) {
    const [stepMessage, correctAnswer] = stepLogic();
    console.log(stepMessage);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return null;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}`);
};

export default startGame;
