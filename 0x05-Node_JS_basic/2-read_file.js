// 2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

// Uncomment the line below to run the function with the specified path
// countStudents('database.csv');
