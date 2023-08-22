// full_server/utils.js

const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(','));

      const fieldsAbbey = {};
      for (const i in students) {
        if (i !== 0) {
          if (!fieldsAbbey[students[i][3]]) fieldsAbbey[students[i][3]] = [];

          fieldsAbbey[students[i][3]].push(students[i][0]);
        }
      }

      delete fieldsAbbey.field;

      resolve(fieldsAbbey);

      //   return fields;
    });
  });
}

export default readDatabase;
