import startGame from '../index.js';
import { generateRandomNumber, isPrime } from '../utils.js';

const stepLogic = () => {
  const a = generateRandomNumber(100);

  console.log(`Question: ${a}`);

  return (isPrime(a)) ? 'yes' : 'no';
};

const runBrainPrime = () => {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainPrime;
