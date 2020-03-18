import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameConditions = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (firstMember, difference, length) => {
  const progression = [firstMember];

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[progression.length - 1] + difference);
  }

  return progression;
};

const stepLogic = () => {
  const firstMember = generateRandomNumber(progressionLength);
  const difference = generateRandomNumber(progressionLength);
  const progression = generateProgression(firstMember, difference, progressionLength);

  const hiddenItemIndex = generateRandomNumber(10, 'floor');
  const prevHidden = progression.slice(0, hiddenItemIndex).join(' ');
  const nextHidden = progression.slice(hiddenItemIndex + 1).join(' ');

  const questionProgression = [`${prevHidden} .. ${nextHidden}`];
  const answer = String(progression[hiddenItemIndex]);

  return [questionProgression, answer];
};

const runBrainProgression = () => startGame(gameConditions, stepLogic);

export default runBrainProgression;
