// 5-http.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (pathname === '/students') {
    const filePath = path.join(__dirname, 'database.csv');
    countStudents(filePath)
      .then(() => {
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
