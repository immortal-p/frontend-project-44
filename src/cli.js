import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

export default getName;
