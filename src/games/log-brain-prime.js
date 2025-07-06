import generateRandomNum from '../random-num.js'
import BrainGame from '../BrainGame.js'

const isPrime = (num) => {
  if (num <= 1) return 'no'
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no'
  }

  return 'yes'
}

const primeGame = new BrainGame({
  description: 'Answer "yes" if given number is prime. Otherwise answer "no"',
  generateQuestion: generateRandomNum,
  getCorrectAnswer: isPrime,
  rangeMin: 0,
  rangeMax: 30,
})

export default primeGame.run.bind(primeGame)
