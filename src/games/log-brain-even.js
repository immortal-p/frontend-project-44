import generateRandomNum from '../random-num.js'
import BrainGame from '../BrainGame.js'

const isEven = num => num % 2 === 0
const getCorrectAns = (num) => {
  const expectedAnswer = isEven(num) ? 'yes' : 'no'
  return expectedAnswer
}

const evenGame = new BrainGame({
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  generateQuestion: generateRandomNum,
  getCorrectAnswer: getCorrectAns,
  rangeMin: 0,
  rangeMax: 50,
})

export default evenGame.run.bind(evenGame)
