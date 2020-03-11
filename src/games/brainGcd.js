import startGame from '../index.js';

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
  return `${a + b}`;
};

const stepLogic = () => {
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);

  console.log(`Question: ${a} ${b}`);

  return findGcd(a, b);
};

const runBrainGcd = () => {
  const gameConditions = 'Find the greatest common divisor of given numbers.';
  return startGame(gameConditions, stepLogic);
};

export default runBrainGcd;
