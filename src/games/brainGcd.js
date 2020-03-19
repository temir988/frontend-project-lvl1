import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getStepData = () => {
  const a = generateRandomNumber(100);
  const b = generateRandomNumber(100);

  const question = `${a} ${b}`;
  const answer = String(findGcd(a, b));

  return [question, answer];
};

const runBrainGcd = () => startGame(description, getStepData);

export default runBrainGcd;
