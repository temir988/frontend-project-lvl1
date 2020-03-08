import readlineSync from 'readline-sync';

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  const steps = 3;

  for (let i = 0; i < steps; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${name}!`);
      return null;
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}`);
};

export default brainEven;
