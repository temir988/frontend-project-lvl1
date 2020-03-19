import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getStepData = () => {
  const number = generateRandomNumber(0, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainEven = () => startGame(description, getStepData);

export default runBrainEven;
