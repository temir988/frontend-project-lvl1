import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getStepData = () => {
  const randomNumber = generateRandomNumber(100);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainEven = () => startGame(description, getStepData);

export default runBrainEven;
