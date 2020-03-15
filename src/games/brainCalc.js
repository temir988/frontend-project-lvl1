import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const calculate = (operator, a, b) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return new Error(`Unknows operations: ${operator}`);
  }
};

const stepLogic = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[generateRandomNumber(operations.length, 'floor')];
  const a = generateRandomNumber(100);
  const b = generateRandomNumber(100);

  const message = `Question: ${a} ${randomOperation} ${b}`;
  const answer = String(calculate(randomOperation, a, b));

  return [message, answer];
};

const runBrainCalc = () => {
  const gameConditions = 'What is the result of the expression?';
  return startGame(gameConditions, stepLogic);
};

export default runBrainCalc;
