const generateRandomNumber = (range, round = 'round') => {
  const randomNumber = Math.random() * range;
  return Math[round](randomNumber);
};

const isPrime = (num) => {
  const halfNum = Math.round(num / 2);
  for (let i = 2; i <= halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isEven = (num) => num % 2 === 0;

export { generateRandomNumber, isPrime, isEven };
