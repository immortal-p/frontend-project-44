import generateRandomNum from '../random-num.js';
import BrainGame from '../BrainGame.js';

const createHiddenProgression = (min, max) => {
  const possibleSteps = [2, 3, 4, 5, 6, 7, 8];
  const step = possibleSteps[generateRandomNum(0, possibleSteps.length - 1)];
  const firstTerm = generateRandomNum(min, max);
  const sequence = [];
  const n = 10;
  for (let i = 0; i <= n; i += 1) {
    sequence.push(firstTerm + step * i);
  }
  const hiddenIndex = generateRandomNum(0, sequence.length - 1);
  const hiddenValue = sequence[hiddenIndex];
  sequence[hiddenIndex] = '..';
  return {
    progression: sequence.join(' '),
    hiddenValue,
  };
};

const taskData = {};

const generateExpression = (min, max) => {
  const { progression, hiddenValue } = createHiddenProgression(min, max);
  taskData.hiddenValue = hiddenValue;
  return progression;
};

const getCorrectAnswer = () => taskData.hiddenValue;

const progressionGame = new BrainGame({
  description: 'What number is missing in the progression?',
  generateQuestion: generateExpression,
  getCorrectAnswer,
  rangeMin: 0,
  rangeMax: 30,
})

export default progressionGame.run.bind(progressionGame);