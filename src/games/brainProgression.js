import startGame from '../index.js';

const generateProgression = () => {
  const a1 = Math.round(Math.random() * 10);
  const d = Math.round(Math.random() * 10);
  const progressionLength = 10;
  const progression = [a1];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + d);
  }

  return progression;
};

const stepLogic = () => {
  const progression = generateProgression();
  const hiddenItemIndex = Math.floor(Math.random() * 10);
  const prevHidden = progression.slice(0, hiddenItemIndex).join(' ');
  const nextHidden = progression.slice(hiddenItemIndex + 1).join(' ');

  console.log(`Question: ${prevHidden} .. ${nextHidden}`);

  return String(progression[hiddenItemIndex]);
};

const runBrainProgression = () => {
  const gameConditions = 'What number is missing in the progression?';
  return startGame(gameConditions, stepLogic);
};

export default runBrainProgression;
