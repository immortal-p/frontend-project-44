import getName from '../cli.js';

const runBrainGames = () => {
  console.log('Welcome to the Brain Games!');

  const firstName = getName();
  console.log(`Hello, ${firstName}!`);
};

export default runBrainGames;
