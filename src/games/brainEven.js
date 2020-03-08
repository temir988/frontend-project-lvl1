import game from '../index.js';

const stepLogic = () => {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  return (randomNumber % 2 === 0) ? 'yes' : 'no';
};

const brainEven = () => {
  const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
  return game(gameConditions, stepLogic);
};

export default brainEven;
