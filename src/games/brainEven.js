import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const stepLogic = () => {
  const randomNumber = generateRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  return (randomNumber % 2 === 0) ? 'yes' : 'no';
};

const runBrainEven = () => {
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainEven;
