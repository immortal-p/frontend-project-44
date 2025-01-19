import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');
