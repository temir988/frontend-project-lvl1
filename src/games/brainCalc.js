import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

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

const getStepData = () => {
  const randomOperation = operations[generateRandomNumber(operations.length, 'floor')];
  const a = generateRandomNumber(100);
  const b = generateRandomNumber(100);

  const question = `${a} ${randomOperation} ${b}`;
  const answer = String(calculate(randomOperation, a, b));

  return [question, answer];
};

const runBrainCalc = () => startGame(description, getStepData);

export default runBrainCalc;
