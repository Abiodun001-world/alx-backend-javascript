// full_server/utils.js

const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n');
      const students = {};

      for (const line of lines) {
        if (line.trim() !== '') {
          const [, , , field] = line.split(','); // Ignore unused variables
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(line.split(',')[0]); // Use firstname only
        }
      }

      resolve(students);
    });
  });
}

module.exports = { readDatabase };
