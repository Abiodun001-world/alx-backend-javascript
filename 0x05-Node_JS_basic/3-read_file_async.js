// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
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

      console.log(`Number of students: ${lines.length - 1}`);

      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
