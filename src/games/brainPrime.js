import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const isPrime = (num) => {
  const halfNum = Math.round(num / 2);
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const stepLogic = () => {
  const a = generateRandomNumber(100);

  console.log(`Question: ${a}`);

  return isPrime(a);
};

const runBrainPrime = () => {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(gameConditions, stepLogic);
};

export default runBrainPrime;
