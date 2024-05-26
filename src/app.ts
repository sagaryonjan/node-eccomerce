import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, {  Request, Response } from 'express';

import routes from './routes';
import config from './core/config';
import notFoundError from './core/middlewares/notFoundHandler';
import genericErrorHandler from './core/middlewares/genericErrorHandler';

const app: express.Application = express();

app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

if (config.environment === 'development') {
  app.use(morgan('dev'));
  app.use(cors());
}

// if (config.environment === 'production') {
//   app.use(morgan('combined'));
//   app.use(
//     cors({
//       origin: config.host
//     })
//   );
// }

app.use(express.json());
app.use('/api', routes);
app.use('/images', express.static('src/images'));

app.get('/', (req: Request, res: Response) => {
  res.send(`Welcome to Blog Post API Server. Blog API documentation link: http://${config.host}:${config.env_port}/api/docs` );
});

app.use(genericErrorHandler);
app.use(notFoundError);

export default app;

