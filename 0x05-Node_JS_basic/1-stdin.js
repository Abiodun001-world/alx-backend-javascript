const { promisify } = require('util');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = promisify(rl.question).bind(rl);

(async () => {
  try {
    console.log('Welcome to Holberton School, what is your name?');
    const name = await question('');
    console.log(`Your name is: ${name}`);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    console.log('This important software is now closing');
    rl.close();
  }
})();
