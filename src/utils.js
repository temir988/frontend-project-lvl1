const generateRandomNumber = (range, round = 'round') => {
  const randomNumber = Math.random() * range;
  return Math[round](randomNumber);
};

export default generateRandomNumber;
