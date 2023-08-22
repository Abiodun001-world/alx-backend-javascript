process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const abiodun = process.stdin.read();
  if (abiodun !== null) {
    process.stdout.write(`Your name is: ${abiodun}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
