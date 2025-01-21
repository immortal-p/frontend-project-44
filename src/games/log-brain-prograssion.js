import generateRandomNum from '../random-num.js';
import playBrainGame from '../index.js';

const createHiddenProgression = (min, max) => {
  const possibleSteps = [2, 3, 4, 5, 6, 7, 8];
  const step = possibleSteps[generateRandomNum(0, possibleSteps.length - 1)];
  const firstTerm = generateRandomNum(min, max);
  const sequence = [firstTerm];
  const n = 10;
  for (let i = 0; i <= n; i += 1) {
    let lastTerm = sequence[sequence.length - 1];
    lastTerm += step;
    sequence.push(lastTerm);
  }
  const hiddenIndex = generateRandomNum(0, sequence.length);
  sequence[hiddenIndex] = '..';
  return sequence.join(' ');
};

const findHiddenNumber = (progres) => {
  const sequenceArr = progres.split(' ');
  const n = sequenceArr.length;
  let budNum = 0;
  let step;
  for (let i = 0; i < n; i += 1) {
    if (sequenceArr[i] === '..') {
      if (i + 1 >= n) {
        step = sequenceArr[i - 1] - sequenceArr[i - 2];
        budNum = Number(sequenceArr[i - 1]) + step;
      } else if (i - 1 < 0) {
        step = Number(sequenceArr[i + 2]) - Number(sequenceArr[i + 1]);
        budNum = Number(sequenceArr[i + 1]) - step;
      } else {
        step = (sequenceArr[i + 1] - sequenceArr[i - 1]) / 2;
        if (step === 1) step = 2;
        budNum = Number(sequenceArr[i - 1]) + step;
      }
    }
  }
  return budNum;
};

const description = 'What number is missing in the progression?';

const runBrainPrograssion = () => {
  playBrainGame(description, createHiddenProgression, 0, 30, findHiddenNumber);
};
export default runBrainPrograssion;
