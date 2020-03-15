import startGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameConditions = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstMember = generateRandomNumber(10);
  const difference = generateRandomNumber(10);
  const progressionLength = 10;
  const progression = [firstMember];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + difference);
  }

  return progression;
};

const stepLogic = () => {
  const progression = generateProgression();
  const hiddenItemIndex = generateRandomNumber(10, 'floor');
  const prevHidden = progression.slice(0, hiddenItemIndex).join(' ');
  const nextHidden = progression.slice(hiddenItemIndex + 1).join(' ');

  const questionProgression = [`${prevHidden} .. ${nextHidden}`];
  const answer = String(progression[hiddenItemIndex]);

  return [questionProgression, answer];
};

const runBrainProgression = () => startGame(gameConditions, stepLogic);

export default runBrainProgression;
