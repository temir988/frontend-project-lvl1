import game from '../index.js';

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
  const a = Math.round(Math.random() * 100);

  console.log(`Question: ${a}`);

  return isPrime(a);
};

const brainPrime = (name) => {
  const gameConditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return game(name, gameConditions, stepLogic);
};

export default brainPrime;
