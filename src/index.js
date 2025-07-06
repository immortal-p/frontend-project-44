import readLineSync from 'readline-sync'

const playBrainGame = (gameDescription, gameLogic, rangeMin, rangeMax) => {
  let playerAnswer
  let score = 0
  console.log('Welcome to the Brain Games!')

  const playerName = readLineSync.question('May I have your name? ')
  console.log(`Hello, ${playerName}!`)

  console.log(gameDescription)

  while (score < 3) {
    const question = gameLogic.generateQuestion(rangeMin, rangeMax)
    console.log(`Question: ${question}`)
    playerAnswer = readLineSync.question('Your answer: ')

    const correctAnswer = gameLogic.getCorrectAnswer(question)
    if (playerAnswer === String(correctAnswer)) {
      score += 1
      console.log('Correct!')
    } else {
      console.log(
        `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
      )
      console.log(`Let's try again, ${playerName}!`)
      break
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${playerName}!`)
  }
}

export default playBrainGame
