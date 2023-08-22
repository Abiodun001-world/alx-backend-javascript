// 7-http_express.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  const filePath = path.join(__dirname, 'database.csv');
  countStudents(filePath)
    .then(() => {
      const readStream = fs.createReadStream(filePath);
      readStream.pipe(res);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
