import './env.js';
import config from 'config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { initRoutes } from './app/routes/index.js';

// this will start db
import './app/services/db.js';

const PORT = process.env.NODE_PORT || 3000;
const IP = config.get('IP');
const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initRoutes(app);

const onServerStart = () => {
  const ENVIROINMENT = process.env.NODE_ENV || 'development';
  const message = `Server Listening On Port ${PORT}, ENVIROINMENT=${ENVIROINMENT}`;
  // eslint-disable-next-line no-console
  console.log(message);
};

app.listen(PORT, IP, onServerStart);


