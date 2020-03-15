import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = Math.round(num / 2);
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const stepLogic = () => {
  const a = generateRandomNumber(100);
  const questionArgs = [a];
  const answer = isPrime(a) ? 'yes' : 'no';

  return [questionArgs, answer];
};

const runBrainPrime = () => startGame(gameConditions, stepLogic);

export default runBrainPrime;
