// full_server/controllers/StudentsController.js

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fieldsAbbey) => {
        const students = [];
        // let count = 0;
        let msg;

        // for (const key of Object.keys(fields)) {
        //   count += fields[key].length;
        // }

        // students.push(`Number of students: ${count}`);
        students.push('This is the list of our students');

        for (const key of Object.keys(fieldsAbbey)) {
          msg = `Number of students in ${key}: ${
            fieldsAbbey[key].length
          }. List: ${fieldsAbbey[key].join(', ')}`;

          students.push(msg);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fieldsAbbey) => {
          const students = fieldsAbbey[major];

          response.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
