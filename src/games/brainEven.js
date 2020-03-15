import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const stepLogic = () => {
  const randomNumber = generateRandomNumber(100);
  const questionArgs = [randomNumber];
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return [questionArgs, answer];
};

const runBrainEven = () => startGame(gameConditions, stepLogic);

export default runBrainEven;
