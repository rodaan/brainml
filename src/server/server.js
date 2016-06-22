import express from 'express';
import bodyParser from 'body-parser';
import apiRoute from './routes/api';
import dotenv from 'dotenv';
dotenv.load();

const port = process.env.PORT || 7750;
const app = express();

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/api', apiRoute);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Brain is listening on: ${port} `);
});
