import startGame from '../index.js';
import { generateRandomNumber, isEven } from '../utils.js';

const stepLogic = () => {
  const randomNumber = generateRandomNumber(100);
  console.log(`Question: ${randomNumber}`);

  return (isEven(randomNumber)) ? 'yes' : 'no';
};

const runBrainEven = () => {
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainEven;
