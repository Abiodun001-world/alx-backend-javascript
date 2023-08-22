// full_server/server.js

import express from 'express';
import controller from './routes/index';

const app = express();
const port = 1245;

controller(app);

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
