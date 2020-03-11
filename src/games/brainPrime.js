import startGame from '../index.js';
import { generateRandomNumber, isPrime } from '../utils.js';

const stepLogic = () => {
  const a = generateRandomNumber(100);

  const message = `Question: ${a}`;
  const answer = isPrime(a) ? 'yes' : 'no';
  return [message, answer];
};

const runBrainPrime = () => {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainPrime;
