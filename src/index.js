import readlineSync from 'readline-sync';

const game = (name, gameConditions, stepLogic) => {
  console.log(gameConditions);

  const steps = 3;

  for (let i = 0; i < steps; i += 1) {
    const correctAnswer = stepLogic();

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return null;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}`);
};

export default game;
