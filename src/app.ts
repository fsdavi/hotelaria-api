import express, { Application } from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { roomsRouter } from './routes';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', roomsRouter);

app.listen(config.port, () => {
  console.log(`Servidor iniciado na porta ${config.port}`);
});