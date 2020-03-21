import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstMember, difference, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const element = firstMember + i * difference;
    progression.push(element);
  }

  return progression;
};

const getStepData = () => {
  const firstMember = generateRandomNumber(0, 10);
  const difference = generateRandomNumber(1, 10);
  const progression = generateProgression(firstMember, difference, progressionLength);
  const hiddenItemIndex = generateRandomNumber(0, progressionLength - 1);

  const answer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const runBrainProgression = () => startGame(description, getStepData);

export default runBrainProgression;
