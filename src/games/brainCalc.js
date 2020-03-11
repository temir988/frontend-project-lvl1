import startGame from '../index.js';

const stepLogic = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const a = Math.round(Math.random() * 100);
  const b = Math.round(Math.random() * 100);

  console.log(`Question: ${a} ${randomOperation} ${b}`);

  switch (randomOperation) {
    case '+':
      return `${a + b}`;
    case '-':
      return `${a - b}`;
    case '*':
      return `${a * b}`;
    default:
      return new Error(`Unknows operations: ${randomOperation}`);
  }
};

const runBrainCalc = () => {
  const gameConditions = 'What is the result of the expression?';
  return startGame(gameConditions, stepLogic);
};

export default runBrainCalc;
