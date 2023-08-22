// 6-http_express.js

const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(port, () => {
  // console.log('Server is listening on port 1245');
});

module.exports = app;
