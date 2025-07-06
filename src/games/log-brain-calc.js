import generateNum from '../random-num.js'
import BrainGame from '../BrainGame.js'

const OPERATORS = ['+', '-', '*']

const getRandomOperator = () => {
  return OPERATORS[Math.floor(Math.random() * OPERATORS.length)]
}

const evaluateExpression = (expression) => {
  const expressionParts = expression.split(' ')
  const numFirst = Number(expressionParts[0])
  const numSecond = Number(expressionParts[2])
  const operator = expressionParts[1]
  let calculatedValue = 0
  switch (operator) {
    case ('+'):
      calculatedValue = numFirst + numSecond
      break
    case ('-'):
      calculatedValue = numFirst - numSecond
      break
    case ('*'):
      calculatedValue = numFirst * numSecond
      break
    default:
      console.log(`Invalid operator: ${operator}`)
  }
  return calculatedValue
}

const generateExpression = (rangeMin, rangeMax) => {
  const numFirst = generateNum(rangeMin, rangeMax)
  const numSecond = generateNum(rangeMin, rangeMax)
  const operator = getRandomOperator()

  return `${numFirst} ${operator} ${numSecond}`
}

const calcGame = new BrainGame({
  description: 'What is the result of the expression?',
  generateQuestion: generateExpression,
  getCorrectAnswer: evaluateExpression,
  rangeMin: 0,
  rangeMax: 20,
})

export default calcGame.run.bind(calcGame)
