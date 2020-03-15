import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameConditions = 'Find the greatest common divisor of given numbers.';

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

const stepLogic = () => {
  const a = generateRandomNumber(100);
  const b = generateRandomNumber(100);

  const message = `Question: ${a} ${b}`;
  const answer = String(findGcd(a, b));

  return [message, answer];
};

const runBrainGcd = () => startGame(gameConditions, stepLogic);

export default runBrainGcd;
