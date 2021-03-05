import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config'

import Routes from './routes/routes';

const app = express();
app.set('port', config.port);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(Routes);

export default app;