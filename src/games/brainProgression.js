import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const generateProgression = () => {
  const a1 = generateRandomNumber(10);
  const d = generateRandomNumber(10);
  const progressionLength = 10;
  const progression = [a1];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + d);
  }

  return progression;
};

const stepLogic = () => {
  const progression = generateProgression();
  const hiddenItemIndex = generateRandomNumber(10, 'floor');
  const prevHidden = progression.slice(0, hiddenItemIndex).join(' ');
  const nextHidden = progression.slice(hiddenItemIndex + 1).join(' ');

  const message = `Question: ${prevHidden} .. ${nextHidden}`;
  const answer = String(progression[hiddenItemIndex]);

  return [message, answer];
};

const runBrainProgression = () => {
  const gameConditions = 'What number is missing in the progression?';
  return startGame(gameConditions, stepLogic);
};

export default runBrainProgression;
