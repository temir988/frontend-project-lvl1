import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const stepLogic = () => {
  const randomNumber = generateRandomNumber(100);
  const message = `Question: ${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [message, answer];
};

const runBrainEven = () => {
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainEven;
