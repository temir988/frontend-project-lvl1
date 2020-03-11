import startGame from '../index.js';
import { generateRandomNumber } from '../utils.js';

const stepLogic = () => {
  const operations = ['+', '-', '*'];
  const randomOperation = operations[generateRandomNumber(operations.length, 'floor')];
  const a = generateRandomNumber(100);
  const b = generateRandomNumber(100);

  const message = `Question: ${a} ${randomOperation} ${b}`;

  switch (randomOperation) {
    case '+':
      return [message, `${a + b}`];
    case '-':
      return [message, `${a - b}`];
    case '*':
      return [message, `${a * b}`];
    default:
      return new Error(`Unknows operations: ${randomOperation}`);
  }
};

const runBrainCalc = () => {
  const gameConditions = 'What is the result of the expression?';
  return startGame(gameConditions, stepLogic);
};

export default runBrainCalc;
