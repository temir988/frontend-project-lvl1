import game from '../index.js';

const gcd = (num1, num2) => {
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

  return gcd(a, b);
};

const brainGcd = (name) => {
  const gameConditions = 'Find the greatest common divisor of given numbers.';
  return game(name, gameConditions, stepLogic);
};

export default brainGcd;
