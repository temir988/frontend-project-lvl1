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
  const operator = operations[generateRandomNumber(0, operations.length - 1)];
  const a = generateRandomNumber(0, 100);
  const b = generateRandomNumber(0, 100);

  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(operator, a, b));

  return [question, answer];
};

const runBrainCalc = () => startGame(description, getStepData);

export default runBrainCalc;
