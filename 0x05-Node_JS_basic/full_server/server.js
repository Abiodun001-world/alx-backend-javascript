// full_server/server.js

import express from 'express';
import router from './routes/index'; // Include the correct path to the routes directory

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
