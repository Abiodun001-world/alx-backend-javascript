const fs = require('fs');

function countStudents(abbey) {
  let content;

  try {
    content = fs.readFileSync(abbey);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');

  let students = content.filter((item) => item);

  students = students.map((item) => item.split(','));

  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  const fieldsAbbey = {};
  for (const i in students) {
    if (i !== 0) {
      if (!fieldsAbbey[students[i][3]]) fieldsAbbey[students[i][3]] = [];

      fieldsAbbey[students[i][3]].push(students[i][0]);
    }
  }

  delete fieldsAbbey.field;

  for (const key of Object.keys(fieldsAbbey)) {
    console.log(
      `Number of students in ${key}: ${fieldsAbbey[key].length}. List: ${fieldsAbbey[
        key
      ].join(', ')}`,
    );
  }
}

module.exports = countStudents;
