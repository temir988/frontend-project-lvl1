import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const halfNum = Math.round(num / 2);
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getStepData = () => {
  const a = generateRandomNumber(0, 100);
  const question = `${a}`;
  const answer = isPrime(a) ? 'yes' : 'no';

  return [question, answer];
};

const runBrainPrime = () => startGame(description, getStepData);

export default runBrainPrime;
